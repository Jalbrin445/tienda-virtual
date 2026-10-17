import express from 'express';
import userController from '../controllers/usuarios.controller.js';

const router = express.Router();

// Configuración de rutas con sus respectivos middleware y controladores
router.post('/register', userController.crearUsuario);
router.post('/login', userController.login);
router.get('/usuarios', userController.listarUsuarios);


// Exportación del router
export default router;