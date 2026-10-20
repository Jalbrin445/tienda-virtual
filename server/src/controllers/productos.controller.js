import productService from '../services/productos.services.js'

class productController {
    async crear(req, res) {
        // Método para crear un nuevo producto en la capa de controlador
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
        // Método para actualizar un producto por su id y por datos enviados desde el usuario (Capa servicio)
        try {
            const id_producto = req.params.id; // Aqui obtenemos el id de los parametros dinámicos
            const datos_productos = req.body;

            const productoActualizado = await productService.actualizarProducto(id_producto, datos_productos);
            return res.status(200).json({
                success:true,
                message:'Producto actualizado con éxito',
                data: productoActualizado
            })
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:error.message
            })
        }
    }

    async eliminar(req, res) {
        // método para eliminar un producto por su id
        try {
            const id_producto = req.params.id;
            const productoEliminado = await productService.eliminarProducto(id_producto);
            return res.status(200).json({
                success:true,
                message:'Producto eliminado con éxito',
                data: productoEliminado
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message:error.message
            });
        }

    }

    async obtenerTodos(req, res) {
        // Método para obtener todos los productos que se encuentren en la base de datos
        try {
            const productos = await productService.obtenerTodos();
            return res.status(200).json({
                success: true,
                message: 'Productos obtenidos con éxito',
                data: productos
            });
        } catch (error) {
            return res.status(500).json({
                success:false,
                message:error.message
            });
        }
    }

    async obtenerProductoId(req,res) {
        // Método utilizado para obtener un producto por su id
        try {
            const id_producto = req.params.id;
            const producto_id = await productService.obtenerProductoPorId(id_producto);
            return res.status(200).json({
                success: true,
                message:'Producto encontrado con éxito',
                data: producto_id
            });
        } catch (error) {
            return res.status(404).json({
                success: false,
                message:error.message
            });
        }
    }
}

const instProductController = new productController();
export default instProductController;