import pool from '../config/db.js';

class UsuarioModelo {
    async crearUsuarioDB(datos) {
        // Método utilizado para crear un usuario en la base de datos (en la capa modelos)
        const values = [
            datos.nombre,
            datos.password_hash,
            datos.correo,
            datos.nombre_usuario,
            datos.rol
        ];
        const consulta = 'INSERT INTO usuario (nombre, password_hash, correo, nombre_usuario, rol) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
        const resultado = await pool.query(consulta,values);
        return resultado.rows[0];
    }
    async obtenerPorCorreoDB(correo) {
        // Método utilizado para obtener los datos de un usuario utilizando su correo (en la capa modelos)
        const consulta = 'SELECT * FROM usuario WHERE id_usuario = $1;';
        const resultado = await pool.query(consulta, correo);
        return resultado.rows[0];
    }
    async obtenerPorIdDB(id) {
        // Método utilizado para obtener los datos de un usuario por su id
        const consulta = 'SELECT * FROM usuario WHERE id_usuario = $1;';
        const resultado = await pool.query(consulta, id);
        return resultado.rows[0];
    }
    async listarUsuariosDB() {
        // Método utilizado para obtener a todos los usuarios (en la capa modelos)
        const consulta = 'SELECT id_usuario, nombre, correo, nombre_usuario, rol, fecha_creacion FROM usuario';
        const resultado = await pool.query(consulta);
        return resultado.rows;
    }
}

const instUsuarioModelo = new UsuarioModelo();
export default instUsuarioModelo;