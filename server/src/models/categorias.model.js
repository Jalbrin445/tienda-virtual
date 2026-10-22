import pool from '../config/db.js';

class CategoriaModelo {
    async listarCategorias() {
        /*
        Método para listar todas las categorías que se encuentren en
        la base de datos
        */
        const consulta = 'SELECT * FROM categoria;';
        const resultado = await pool.query(consulta);
        return resultado.rows;
    }
    async crearCategoria(datos) {
        /*
        Método utilizado para crear categorías en la aplicación
        */
        const consulta = 'INSERT INTO categoria (nombre, subcategoria) VALUES ($1, $2) RETURNING *;';
        const values = [
            datos.nombre,
            datos.subcategoria
        ]
        const resultado = await pool.query(consulta, values);
        return resultado.rows[0];
    }
}

const instCategoriaModelo = new CategoriaModelo();
export default instCategoriaModelo;