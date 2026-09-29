import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CarritoPage from './pages/CarritoPage.jsx';
import { useState } from 'react';
import './App.css'

function App() {
  const [carrito, setCarrito] = useState([]);

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
        <Route path="/" element={<Home carrito={carrito} agregarCarrito={agregarCarrito}/>}/>
        <Route path="/carrito" element={<CarritoPage onVaciar={vaciarCarrito} carritoCompra={carrito} onEliminar={eliminarDelCarrito}/>}/>
      </Routes>
    </>
  )
}

export default App
