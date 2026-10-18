import pool from '../config/db.js'

class ProductoModelo {
    async obtenerTodosDB() {
        const consulta = 'SELECT * FROM productos;';
        const resultado = await pool.query(consulta);
        return resultado.rows;
    }
    async obtenerPorIdDB(id) {
        const consulta = 'SELECT * FROM productos WHERE id_producto = $1;';
        const values = [parseInt(id,10)];
        const resultado = await pool.query(consulta, values);
        return resultado.rows[0];
    }
    async crearProductoDB(datos) {
        const consulta = 'INSERT INTO productos (nombre, stock, precio_unitario, descripcion, imagen_url, id_categoria) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;'
        const values = Object.values(datos);
        const resultado = await pool.query(consulta, values);
        return resultado.rows[0];
    
    }   
    async actualizarProductoDB(id, datos) {
        const consulta = 'UPDATE productos SET nombre = $2, stock = $3, precio_unitario = $4, descripcion = $5, imagen_url=$6, id_categoria=$7 WHERE id_producto = $1 RETURNING *;';
        const values = [id, datos.nombre, datos.stock, datos.precio_unitario, datos.descripcion, datos.imagen_url, datos.id_categoria];
        const resultado = await pool.query(consulta, values);
        return resultado.rows[0];
    }
    async eliminarProductoDB(id) {
        const consulta = 'DELETE FROM productos WHERE id_producto = $1 RETURNING *;';
        const values = [id];
        const resultado = await pool.query(consulta, values);
        return resultado.rows[0];
    }
}

const instProductoModelo = new ProductoModelo();
export default instProductoModelo;