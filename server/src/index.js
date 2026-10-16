import express from 'express'; // Aqui llamamos el modulo express

let productos = [
    {
        id: 1,
        nombre:'Protoboard',
        precio:40000,
        stock:5
    },
    {
        id:2,
        nombre:'Chocolatina Jet',
        precio:2000,
        stock:4
    },
    {
        id:3,
        nombre:'Album Jet',
        precio:3000,
        stock:5
    }
];

const app = express() // Instanciamos a express()

// Defino el puerto donde va a escuchar nuestro servidor
const PORT = 3000;

// Middleware básico para que Express entienda datos en formato JSON
app.use(express.json());

// Este es un Endpoint GET básico que me permite manejar una respuesta desde el servidor
app.get('/api/productos', (req, res) => {
    res.status(200).json({
        exito:true,
        mensaje:'Productos obtenidos con éxito',
        productosObtenidos: productos
    });
});

app.get('/api/productos/:id', (req, res) => {
    let {id} = req.params;
    id = parseInt(id);
    
    const productoSeleccionado = productos.find(u=> u.id === id);
    const existeProducto = productos.some(u => u.id === id);
    if (!existeProducto) {
        res.status(400).json({
            exito:false,
            error:'Este producto no existe'
        });
    }

    res.status(200).json({
        exito:true,
        mensaje:'Producto seleccionado con éxito',
        productoSelect: productoSeleccionado
    });
});

app.post('/api/productos', (req, res) => {
    const datosEnviados = req.body;
    productos.push(datosEnviados);
    res.status(201).json({
        exito:true,
        mensaje:'Producto creado con éxito',
        productoCreado: datosEnviados
    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

