const permitidos = (...rolesPermitidos) => {
    return (req, res, next) => {
        if (!req.usuario) {
            return res.status(401).json({
                success:false,
                message:'No se hay usuario autenticado'
            });
        }
       
        if(!rolesPermitidos.includes(req.usuario.rol)){
            return res.status(403).json({
                success:false,
                message:'Usted no tiene permiso para completar esta función'
            });
        } 
        next();
    };
};

export default permitidos;