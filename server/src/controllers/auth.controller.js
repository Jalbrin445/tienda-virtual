import AuthService from '../services/auth.services.js';

class AuthController {
    async registro(req, res) {
        // Método utilizado para registrar nuevos usuarios en la capa controlador
        try {
            const datosUsuario = req.body;
            const resultado = await AuthService.registro(datosUsuario)
            return res.status(201).json({
                success:true,
                message:'Usuario creado con éxito',
                data:resultado
            });
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:error.message
            });
        }
    }
    async login(req, res) {
        // Método utilizado para loguearse en la aplicación (capa de controlador)
        try {
            const correoUsuario = req.body.correo;
            const password = req.body.password;
            
            const resultado = await AuthService.login(correoUsuario, password);
            return res.status(200).json({
                success:true,
                message:'Ha iniciado sesión con éxito',
                data:resultado
            });
        } catch (error) {
            res.status(401).json({
                success:false,
                message:error.message
            })
        }
    }
}

const instAuthController = new AuthController();
export default instAuthController;