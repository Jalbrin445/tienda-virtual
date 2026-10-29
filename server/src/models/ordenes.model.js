import pool from '../config/db.js';


class OrdenModelo {
    async crearOrden(id_usuario, direccion_envio, productos, totalCalculado) {
        /* 
            Este es el método utilizado para crear las ordenes o en este caso las facturaciones
        */
        
        const client = await pool.connect(); // Creamos un nuevo cliente con el pool que exportamos de db

        try {
            // Aqui se encuentra la transacción teniendo en cuenta los principios ACID, de este modo: BEGIN (para inicializar la transacción), COMMIT (para finalizar la transacción de forma exitosa), ROLLBACK (para terminar la transacción y devolver o cancelar todas las operaciones)
            await client.query('BEGIN');
            const insertadoOrden = 'INSERT INTO ordenes (direccion_envio, id_usuario, valor_total) VALUES ($1, $2, $3) RETURNING id_orden;'
            const valuesInsertadoOrden = [
                direccion_envio,
                id_usuario,
                totalCalculado
            ];
            const resultadoInsertado = await client.query(insertadoOrden, valuesInsertadoOrden); // Con esto insertamos la orden del usuario
            const id_orden_generada = resultadoInsertado.rows[0].id_orden; // Obtenemos el id de la orden insertada anteriormente

            const insertadoDetalleOrden = 'INSERT INTO detalle_orden (cantidad, precio,id_orden, id_producto) VALUES ($1, $2, $3, $4);'; 
            const actualizarStock = 'UPDATE productos SET stock = stock - $2 WHERE id_producto = $1;';

            for (let i = 0; i<productos.length; i++) {
                // Iteramos para sacar los productos y de este modo obtener las características del producto que vienen en el json enviado por el usuairo
                let id_producto = productos[i].id_producto; 
                let cantidad_producto = productos[i].cantidad;
                let precio_producto = productos[i].precio;
                let valuesInsertadoDetalleOrden = [
                    cantidad_producto,
                    precio_producto,
                    id_orden_generada,
                    id_producto
                ];

                let resultadoInsertadoDetalleOrden = await client.query(insertadoDetalleOrden, valuesInsertadoDetalleOrden); // Luego insertamos los detalles de la compra, teniendo en cuenta que por cada producto va un registro diferente
                
                let valuesActualizarStock = [
                id_producto,
                cantidad_producto
                ];
                let resultadoActualizarProductos = await client.query(actualizarStock, valuesActualizarStock); // Aqui actualizamos la cantidiad en el producto
            }

            
            await client.query('COMMIT'); // Acabamos la transacción si es exitosa
            return { id_orden: id_orden_generada, id_usuario, direccion_envio, valor_total: totalCalculado}; // Devolvemos este json
        } catch (error) {
            await client.query('ROLLBACK'); // Aqui termina la transacción si se encuentra un error durante la ejecución del código
            throw error;
        } finally {
            client.release(); // Se elimina el cliente o se libera el cliente
        }
    }
}

// Instanciamos la clase
const instOrdenModelo = new OrdenModelo();
export default instOrdenModelo;