import express from 'express';
import userController from '../controllers/usuarios.controller.js';
import requestToken from '../middlewares/auth.middleware.js';

const router = express.Router();

// Configuración de rutas con sus respectivos middleware y controladores
router.get('/', requestToken, userController.listarUsuarios);
router.get('/:id',requestToken, userController.obtenerPorId);

// Exportación del router
export default router;