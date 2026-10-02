import { Routes, Route } from 'react-router-dom';
import Home from './pages/homePage/Home.jsx';
import CarritoPage from './pages/carritoPage/CarritoPage.jsx';
import ProductoDetalle from './pages/productoDetalle/ProductoDetalle.jsx';
import Checkout from './pages/checkoutPage/Checkout.jsx';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import obtenerProductos from './services/productService.js';
import NavBar from './components/navBar/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

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
        const response = await obtenerProductos(); // fetch a la API que contiene los productos
        if (!ignore) {
          setProductos(response);
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
      <NavBar cantidadProductos={carrito.length}></NavBar>
      <Routes>
        <Route path="/" element={<Home carrito={carrito} agregarCarrito={agregarCarrito} productos={productos} loading={loading} error={error}/>}/>
        <Route path="/carrito" element={<CarritoPage onVaciar={vaciarCarrito} carritoCompra={carrito} onEliminar={eliminarDelCarrito}/>}/>
        <Route path="/producto/:id" element={<ProductoDetalle productos={productos}/>}/>
        <Route path="/checkout" element={<Checkout carrito={carrito} vaciarCarrito={vaciarCarrito}/>}/>
        
      </Routes>
      <Footer></Footer>
      <Toaster/>
    </>
  )
}

export default App
