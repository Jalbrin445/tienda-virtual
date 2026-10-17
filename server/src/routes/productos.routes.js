import express from 'express';
import instproductController from '../controllers/productos.controller.js';

const router = express.Router() // Se crea el mini-enrutador


// Configuración de rutas con sus respectivos middleware y controladores
router.get('/', instproductController.obtenerTodos);
router.get('/:id', instproductController.obtenerProductoId);
router.post('/', instproductController.crear);
router.put('/:id', instproductController.actualizar);
router.delete('/:id', instproductController.eliminar);

// Exporta el router para que se pueda usar en todas partes
export default router;