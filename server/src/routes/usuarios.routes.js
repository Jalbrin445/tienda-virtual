import express from 'express';
import userController from '../controllers/usuarios.controller.js';

const router = express.Router();

// Configuración de rutas con sus respectivos middleware y controladores
router.get('/', userController.listarUsuarios);
router.get('/:id',userController.obtenerPorId);

// Exportación del router
export default router;