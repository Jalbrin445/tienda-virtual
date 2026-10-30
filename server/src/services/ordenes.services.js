import OrdenModel from '../models/ordenes.model.js';
import productService from '../services/productos.services.js'


class ordenesService {
    // Plantilla o clase utilizada para el modulo de ordenes en la capa servicio
    async crearOrden(id_usuario, datos) {
        // Método utilizado para crear una orden en la capa servicio
        const idUsuario = parseInt(id_usuario); // Obtenemos el id
        if ((idUsuario<0) || isNaN(idUsuario)) {
            // Comprobamos que el id sea correcto o que sí se haya enviado alguno
            throw new Error('El id del usuario no es valido');
        }
        if ((typeof datos.direccion_envio !== "string")) {
            // Comprobamos que la dirección enviada si sea un string
            throw new Error('No ha enviado correctamente una dirección');
        }
        if (!Array.isArray(datos.productos) || (datos.productos.length  === 0)){
            // Comprobamos que el array de productos si sea un array y no este vacio
            throw new Error('Los datos del producto enviado no son correctos');   
        }

        /* 
            En esta parte comprobamos que el 
            producto exista, que hayan existencias 
            del mismo, creamos un acumulador para el
            total de los productos que se han procesado
        */
        let totalCalculado = 0;
        let productosProcesados = [];

        for (let i = 0; i <datos.productos.length; i++){
            let id_producto = datos.productos[i].id_producto;
            let cantidad_solicitada = datos.productos[i].cantidad;
            let siExisteProducto = await productService.obtenerProductoPorId(id_producto);
            if (siExisteProducto) {

                if (siExisteProducto.stock >= cantidad_solicitada) {
                    
                    let totalProducto = cantidad_solicitada*siExisteProducto.precio_unitario;
                    totalCalculado = totalCalculado + totalProducto;
                    productosProcesados.push({id_producto, cantidad: cantidad_solicitada,precio: siExisteProducto.precio_unitario}); // Aqui se insertan los productos al array que se va a enviar a la capa de modelo

                } else {
                    throw new Error('No existen unidades suficientes en el inventario');
                }
            } else {
                throw new Error(`EL producto con ID ${id_producto} no existe`);
            }
        }
        const resultado = await OrdenModel.crearOrden(id_usuario, datos.direccion_envio, productosProcesados, totalCalculado);
        return resultado;

    }
    async consultarOrdenes() {

    }
    async consultarPorId(id) {

    }
    async obtenerDetalleOrden(id) {

    }
    async actualizarEstado(id) {
        
    }
}

const instOrdenesService = new ordenesService();
export default instOrdenesService;