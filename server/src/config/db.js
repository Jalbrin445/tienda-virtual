import './env.js';
import pg from 'pg';

const { Pool } = pg;

const databaseUrl = process.env.DATABASE_URL?.trim();

function requiredEnvironmentVariable(name) {
    /*
        Esta función es para validar las variables de entorno antes de llegar a
        hacer la conexión con la base de datos.
    */
    
    const value = process.env[name]; // Aqui se obtiene el valor de la variable de entorno

    if (!value) {
        // Lanza un error si encuentra una variable que falta
        throw new Error(`Falta definir la variable de entorno ${name} en server/.env`);
    }

    return value; // Devuelve el valor para usarlo en el pool
}

function databasePort() {
    // Función para validar el el puerto donde se esta levantando el servicio de PostgreSQL, validando que sí se encuentre dentro del rango requerido
    const value = process.env.DB_PORT;

    if (value === undefined || value === '') {
        return 5432;
    }

    const port = Number(value);
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
        throw new Error('DB_PORT debe ser un número entero entre 1 y 65535');
    }

    return port;
}

// Instanciación de Pool para crear la conexión a la base de datos y así hacer las query
const pool = new Pool(
    databaseUrl
        ? { connectionString: databaseUrl } // Se valida si se encuentra en producción por el url que por lo regular se hace de esta manera
        : {
              host: requiredEnvironmentVariable('DB_HOST'),
              port: databasePort(),
              user: requiredEnvironmentVariable('DB_USER'),
              password: requiredEnvironmentVariable('DB_PASSWORD'),
              database: requiredEnvironmentVariable('DB_NAME'),
          },
);

// Esta es una query o consulta de prueba para comprobar que la conexión a la base de datos sí se haya dado correctamente
pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error(`Error conectando a la base de datos: ${err.stack}`);
    } else {
        console.log(`Conexión exitosa a PostgreSQL. La hora del servidor es: ${res.rows[0].now}`)
    }
});

export default pool; // Se exporta el pool para poder utilizar desde otros lugares