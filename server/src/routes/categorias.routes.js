import express from 'express';
import categoriaController from '../controllers/categorias.controller.js';

const router = express.Router();

// Configuración de rutas con sus respectivos middleware y controladores
router.get('/', categoriaController.listarCategorias);
router.post('/', categoriaController.crearCategoria);

export default router;