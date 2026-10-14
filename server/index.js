import express from 'express'; // Aqui llamamos el modulo express

const app = express() // Instanciamos a express()

// Defino el puerto donde va a escuchar nuestro servidor
const PORT = 3000;

// Middleware básico para que Express entienda datos en formato JSON
app.use(express.json());

// Este es un Endpoint GET básico que me permite manejar una respuesta desde el servidor
app.get('/', (req, res) => {
    res.json({
        mensaje:'API de E-commerce funcionando con éxito'
    });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})

