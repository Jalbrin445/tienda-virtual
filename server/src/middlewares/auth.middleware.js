import jwt from 'jsonwebtoken';
import '../config/env.js';


const requestToken = (req, res, next) => {
    // Función middleware para controlar el ingreso de los usuarios utilizando tokens

    const encabezadoAutorizacion = req.headers.authorization;
    if (!encabezadoAutorizacion && !encabezadoAutorizacion.startsWith('Bearer ')) {
        return res.status(401).json({
            success:false,
            message:'Acceso denegado. Token no proporcionado o formato inválido'
        });
    }
    const separacionToken = encabezadoAutorizacion.split(' ')[1];
    try {
        const verificacionToken = jwt.verify(separacionToken, process.env.JWT_SECRET);
        req.usuario = verificacionToken;
        next();
    } catch (error) {
        return res.status(401).json({
            success:false,
            message:'Token inválido o expirado'
        });
    }
}

export default requestToken;