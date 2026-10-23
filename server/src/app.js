import express from 'express'; // importación de express
import productRoutes from './routes/productos.routes.js';
import userRoutes from './routes/usuarios.routes.js';
import ordenRoutes from './routes/ordenes.routes.js';
import categoriaRoutes from './routes/categorias.routes.js';
import authRoutes from './routes/auth.routes.js';
import {requestLogger} from './middlewares/logger.middleware.js';


const app = express(); // Instancia de express

// Middlewares globales
app.use(express.json());

app.use(requestLogger);


app.use('/api/productos', productRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/usuarios', userRoutes);
app.use('/api/ordenes', ordenRoutes);
app.use('api/auth', authRoutes);


export {app};