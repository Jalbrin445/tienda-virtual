import express from 'express';
import ordenController from '../controllers/ordenes.controller.js';

const router = express.Router();

// Configuración de rutas con sus respectivos middleware y controladores

router.post('/', ordenController.crearOrden);
router.get('/', ordenController.consultarOrdenes);
router.get('/:id', ordenController.consultarPorId);
router.get('/:id/detalle', ordenController.obtenerDetalleOrden);
router.put('/:id', ordenController.actualizarEstado);

export default router;