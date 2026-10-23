import usuarioModelo from '../models/usuarios.model.js';

class usuariosService {
    /*
    Clase que contiene los métodos relacionados con la gestión de usuario como Eliminar un usuario y todo eso
    */
    async listarUsuarios() {
        // Método utilizado para obtener todos los usuarios que se encuentran en la base de datos
        const resultado = await usuarioModelo.listarUsuariosDB();
        return resultado;
    }

    async obtenerPorId(id) {
        // Método utilizado para obtener a un usuario por su id
        const id_usuario = parseInt(id);
        if ((id_usuario <= 0) || isNaN(id_usuario)) {
            throw new Error('El id enviado es negativo o no ha sido enviado');
        }
        const resultado = await usuarioModelo.obtenerPorIdDB(id_usuario);
        if (!resultado) {
            throw new Error('No se ha encontrado ningún usuario con ese id');
        }
        delete resultado.password_hash;
        return resultado;
    }
}

const instUsuariosService = new usuariosService();
export default instUsuariosService;