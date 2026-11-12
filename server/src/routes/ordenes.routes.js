import express from 'express';
import ordenController from '../controllers/ordenes.controller.js';
import requestToken from '../middlewares/auth.middleware.js';
import permitidos from '../middlewares/roles.middleware.js';

const router = express.Router();

// Configuración de rutas con sus respectivos middleware y controladores

router.post('/', requestToken, ordenController.crearOrden); // Ruta para crear una orden
router.get('/', requestToken, permitidos('admin'), ordenController.consultarOrdenes); // ruta para consultar todas las ordenes
router.get('/:id', requestToken, ordenController.consultarPorId); // ruta para consultar una orden por su id
router.get('/:id/detalle', requestToken, ordenController.obtenerDetalleOrden); // ruta para obtener los detalles de una orden
router.put('/:id', requestToken, permitidos('admin'), ordenController.actualizarEstado); // ruta para actualizar el estado de una orden

export default router;