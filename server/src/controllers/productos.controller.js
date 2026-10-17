import productService from '../services/productos.services.js'

class productController {
    async crear(req, res) {
        // Método para crear un nuevo producto
        try {
            // Obtenemos la información que envia el cliente en el body de la petición http
            const datosCliente = req.body;
            
            // Lanzamos una petición al servicio específico para crear el producto donde manejamos los errores y todo la lógica de negocio
            const productoCreado = await productService.crearProducto(datosCliente);

            return res.status(201).json({
                success:true,
                message:'Producto creado exitosamente',
                data: productoCreado
            });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message:error.message
            });
        }
    }

    async actualizar(req, res) {

    }

    async eliminar(req, res) {


    }

    async obtenerTodos(req, res) {

    }

    async obtenerProductoId(req,res) {

    }
}

const instProductController = new productController();
export default instProductController;