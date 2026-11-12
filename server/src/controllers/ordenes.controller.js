import ordenesService from '../services/ordenes.services.js';

class ordenController {
    async crearOrden(req,res){
        // Método utilizado para crear una orden según el usuario.
        try {
            const id_usuario = req.usuario.id;
            
            // Hacemos la petición tomando los datos del id del usuario de la cabecera que el middleware guardó
            const orden = await ordenesService.crearOrden(id_usuario, req.body);

            // Respuesta si toda la solicitud HTTP sale bien
            res.status(201).json({
                success: true,
                message:'Orden creada con éxito',
                data: orden
            });
        } catch (error) {
            // manejo de errores, según lo que responda la capa de servicio o el modelo de datos
            res.status(400).json({
                success: false,
                message:error.message
            });
        }
    }
    async consultarOrdenes(req,res){

    }
    async consultarPorId(req,res) {

    }
    async obtenerDetalleOrden(req,res) {

    }
    async actualizarEstado(req,res) {

    }
}

const instOrdenController = new ordenController();
export default instOrdenController;