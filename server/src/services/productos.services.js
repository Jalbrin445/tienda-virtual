import ProductosModel from '../models/productos.model.js';

class productosServices {
    async crearProducto(datos) {
        if (datos.nombre && datos.stock !== undefined && datos.precio_unitario !== undefined&& datos.imagen_url && datos.id_categoria) {
            if (datos.stock < 0) {
                throw new Error('El stock debe ser igual o mayor a 0');
            } else if (datos.precio_unitario < 0) {
                throw new Error('El precio unitario ingresado es invalido, el precio debe ser mayor a 0');
            }
            const resultado = await ProductosModel.crearProductoDB(datos);
            return resultado;
            
        } else {
            throw new Error('Se debe verificar si los datos obligatorios han sido enviados, es decir, nombre del producto, stock, precio unitario del producto, imagen del producto y categoria del producto');
        }
        
    }
    async obtenerTodos() {
        
        const resultado = await ProductosModel.obtenerTodosDB();
        
        return resultado
    }
    async obtenerProductoPorId(id) {
        const id_producto = parseInt(id);
        if ((id_producto < 0) || isNaN(id_producto)) {
            throw new Error("El id seleccionado es negativo o no se ha enviado un id correcto");
        }
        const resultado = await ProductosModel.obtenerPorIdDB(id);
        if (!resultado) {
            throw new Error("Producto no encontrado");
        }
        return resultado;

    }
    async actualizarProducto(id,datos) {
        const productoExiste = await this.obtenerProductoPorId(id);
        if (productoExiste) {
            if (datos.nombre && datos.stock !== undefined && datos.precio_unitario !== undefined&& datos.imagen_url && datos.id_categoria) {
                if (datos.stock < 0) {
                    throw new Error('El stock debe ser igual o mayor a 0');
                } else if (datos.precio_unitario < 0) {
                    throw new Error('El precio unitario ingresado es invalido, el precio debe ser mayor a 0');
                }
                const resultado = await ProductosModel.actualizarProductoDB(id,datos);
                return resultado;
            } else {
                throw new Error("Ocurrio un error inesperado en los datos enviados en la actualización");
            }
        } else {
            throw new Error("El producto ha sido eliminado o no existe");
        }

    }
    async eliminarProducto(id) {
        const productoExiste = await this.obtenerProductoPorId(id);
        if (productoExiste) {
            const id_producto = parseInt(id);
            const resultado = await ProductosModel.eliminarProductoDB(id_producto);
            return resultado;
        } else {
            throw new Error("No se encuentra el producto");
        }
    }
}

const instProductosServices = new productosServices();
export default instProductosServices;