const requestLogger = (req, res, next) => {

    // Método utilizado para llevar el registro de las peticiones que se están haciendo
    const fechaHoraActual = new Date().toISOString(); // Obtenemos la fecha y hora actual

    const metodo = req.method;
    const url = req.url;

    console.log(`Fecha: ${fechaHoraActual} - Método ${metodo} - Ruta ${url}`);
    next();

}

export { requestLogger};