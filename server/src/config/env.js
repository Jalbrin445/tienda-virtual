import dotenv from 'dotenv';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// se crea la dirección en donde se encuentra la variable de entorno, ya que se debe especificar para poderlas cargar con el método config, por el uso de modulos ECMASCRIPT
const envPath = resolve(dirname(fileURLToPath(import.meta.url)), '../../.env');

dotenv.config({ path: envPath });
