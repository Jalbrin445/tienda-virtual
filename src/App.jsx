import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CarritoPage from './pages/CarritoPage.jsx';
import ProductoDetalle from './pages/ProductoDetalle.jsx';
import Checkout from './pages/Checkout.jsx';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    // Efecto para hacer peticiones
    let ignore = false;
    async function Peticion() {
      try {
        const response = await fetch("https://dummyjson.com/products"); // fetch a la API que contiene los productos
        const responseJson = await response.json();
        if (!ignore) {
          setProductos(responseJson.products);
        }
      } catch (e) {
        console.error(e);
        setError("Ocurrio un error inesperado");
      } finally {
        setLoading(false);
      }
    }
    Peticion(); // esto es para llamar a la función asincrona

    return () => {
      ignore = true;
    };
  }, []);

  function agregarCarrito(producto) {
    // función para agregar productos al carrito comprobando si el producto está en el producto
    const productoEsta = carrito.findIndex(u=> {
      return u.id === producto.id
    });
    if (productoEsta >=0) {
      const nuevoCarrito = carrito.map(item=> {
        if (producto.id === item.id) {
          return {...item, cantidad:item.cantidad+1}
        }
        return item;
      })
      setCarrito(nuevoCarrito);
    } else {
      setCarrito([...carrito, {...producto,cantidad:1}]);
    }
  }

  function eliminarDelCarrito(id) {
    const nuevoCarrito = carrito.filter(producto=> producto.id !==id);
    setCarrito(nuevoCarrito);
  }
  
  function vaciarCarrito() {
    setCarrito([]);
  }


  return (
    <>
      <Routes>
        <Route path="/" element={<Home carrito={carrito} agregarCarrito={agregarCarrito} productos={productos} loading={loading} error={error}/>}/>
        <Route path="/carrito" element={<CarritoPage onVaciar={vaciarCarrito} carritoCompra={carrito} onEliminar={eliminarDelCarrito}/>}/>
        <Route path="/producto/:id" element={<ProductoDetalle productos={productos}/>}/>
        <Route path="/checkout" element={<Checkout carrito={carrito} vaciarCarrito={vaciarCarrito}/>}/>
      </Routes>
    </>
  )
}

export default App
