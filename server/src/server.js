import './config/env.js';
import { app } from './app.js';

const PORT = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(PORT) || PORT < 0 || PORT > 65535) {
    throw new Error('PORT debe ser un número entero entre 0 y 65535');
}

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});