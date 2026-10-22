import CategoriaModel from '../models/categorias.model.js';


class categoriasService {
    async listarCategorias() {
        /*
        Método para obtener todas las categorías que se encuentren en la base de datos
        */
        const resultado = await CategoriaModel.listarCategorias();
        return resultado; 
    }
    async crearCategoria(datos) {
        /*
        Método para crear una categoria
        */
        if (datos.nombre && datos.subcategoria) {
            const resultado = await CategoriaModel.crearCategoria(datos);
            return resultado;
        } else {
            throw new Error('Se debe verificar si los datos, categoria y subcategoria se hayan diligenciado');
        }
    }
}

const instCategoriasService = new categoriasService();
export default instCategoriasService;