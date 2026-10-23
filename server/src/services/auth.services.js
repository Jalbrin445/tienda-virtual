import bcrypt from 'bcrypt';
import UsuarioModelo from '../models/usuarios.model.js';
class AuthService {
    // Clase que contiene los métodos para registrar y logear un usuario
    async registro(datos) {
        // Método utilizado para registrar nuevos usuarios
        if (datos.nombre && datos.correo && datos.password && datos.nombre_usuario && datos.rol) {
            const verificarExistenciaUsuario = await UsuarioModelo.obtenerPorCorreoDB(datos.correo);
            
            if (verificarExistenciaUsuario) {
                throw new Error('El usuario ya existe');
            }
            
            const constrasena_hasheada = await bcrypt.hash(datos.password, 10);

            const nuevo_objeto_con_hash = {
                nombre: datos.nombre,
                correo:datos.correo,
                password_hash:constrasena_hasheada,
                nombre_usuario:datos.nombre_usuario,
                rol: datos.rol
            }
            
            const resultado = await UsuarioModelo.crearUsuarioDB(nuevo_objeto_con_hash);
            delete resultado.password_hash;
            return resultado;
        } else {
            throw new Error('Falta un dato obligatorio, por favor verificar los datos enviados')
        }
    }
    async login(correo, password) {
        // Método utilizado para loguearse en el Sistema
        if (correo && password) {
            const usuario = await UsuarioModelo.obtenerPorCorreoDB(correo);
            if (usuario) {
                const comparacionContrasena = await bcrypt.compare(password, usuario.password_hash);
                if (comparacionContrasena) {
                    
                    delete usuario.password_hash;
                    return usuario;
                } else {
                    throw new Error('Credenciales inválidas');
                }
            } else {
                throw new Error('Credenciales inválidas');
            }
            
        } else {
            throw new Error('No ha ingresado su correo o contraseña')
        }
    }
}

const instAuthService = new AuthService();
export default instAuthService;
