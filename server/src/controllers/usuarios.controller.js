import usuariosService from '../services/usuarios.services.js';

class usuariosController {
    async listarUsuarios(req, res) {
        // Método utilizado para listar todos los usuarios de la aplicación en la capa controlador
        try {
            const usuarios = await usuariosService.listarUsuarios();
            return res.status(200).json({
                success:true,
                message:'Usuarios devueltos con éxito',
                data:usuarios
            });
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:error.message
            });
        }
        
        
    }
    async obtenerPorId(req, res) {
        // Método utilizado para obtener a un usuario por su id en la capa controlador
        try {
            const id_usuario = req.params.id;
            const usuario = await usuariosService.obtenerPorId(id_usuario);
            return res.status(200).json({
                success: true,
                message:'Usuario encontrado con éxito',
                data:usuario
            });
        } catch (error) {
            return res.status(404).json({
                success:false,
                message:error.message
            });
        }
    }
}

const instUsuariosController = new usuariosController();
export default instUsuariosController;