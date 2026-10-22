import categoriasService from '../services/categorias.services.js';

class categoriasController {

    async listarCategorias(req, res) {
        /*
        Método utilizado para listar todas las categorias en la capa de controladores
        */
        try {
            const categorias = await categoriasService.listarCategorias();
            return res.status(200).json({
                success:true,
                message: 'Categorias obtenidas con éxito',
                data: categorias
            });
        } catch (error) {
            return res.status(500).json({
                success:false,
                message: error.message
            });
        }
    }

    async crearCategoria(req,res) {
        /*
        Método para crear una categoria en la capa de controladores
        */
        try {
            const datosCliente = req.body;

            const categoriaCreada = await categoriasService.crearCategoria(datosCliente);

            return res.status(201).json({
                success:true,
                message:'Categoria creada con éxito',
                data: categoriaCreada
            });
        } catch (error) {
            return res.status(400).json({
                success:false,
                message:error.message
            });
        }
    }
}

const instCategoriasController = new categoriasController();
export default instCategoriasController;