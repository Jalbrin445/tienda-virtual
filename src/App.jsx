import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ProductCard from './components/ProductCard.jsx'
import Carrito from './components/Carrito.jsx'

import './App.css'

function App() {
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");
  useEffect(()=> {
    let ignore = false;
    async function Peticion() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const responseJson = await response.json();
        if (!ignore) {
          setProductos(responseJson);
        }
      } catch (e) {
        console.error(e);
        setError("Ocurrio un error inesperado");
      } finally {
        setLoading(false);
      }
    }
    Peticion();

    return () => {
      ignore = true;
    };
  }, []);
  function agregarCarrito(producto) {
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
  /*
  const listProductos = [{
    id:1,
    name:"Natilla",
    imgURL:"",
    descripcion:"Es un plato tipico de Colombia",
    precio:10200,
  },{
    id:2,
    name:"Platanos",
    imgURL:"",
    descripcion:"Es una fruta cultivada en la zona de Urabá y otras partes de Colombia",
    precio:20000,
  },{
    id:3,
    name:"Banano",
    imgURL:"",
    descripcion:"Es una fruta cultivada en la zona de Urabá y otras partes de Colombia",
    precio:30000,
  },{
    id:4,
    name:"Arroz",
    imgURL:"",
    descripcion:"Producto básico de la canasta familiar de Colombia",
    precio:3000,
  }];
  */
  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-cente text-white">
        {!loading && error === null && productos.map(producto => 
          <ProductCard
            key={producto.id}
            id={producto.id}
            nombre={producto.title}
            imgURL={producto.image}
            descripcion={producto.description}
            precio={producto.price}
            onAdd={agregarCarrito}
        />
          )}
        
      </div>
      <div>
          <Carrito 
            carritoCompra={carrito}
            onEliminar={eliminarDelCarrito}
            onVaciar={vaciarCarrito}
          />
        </div>
    </>
  )
}

export default App
