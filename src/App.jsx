import { useState, useEffect } from 'react'
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import ProductCard from './components/ProductCard.jsx'
import Carrito from './components/Carrito.jsx'
import SearchBar from './components/SearchBar.jsx'

import './App.css'

function App() {
  // Estados para compartir entre renderizaciones
  const [carrito, setCarrito] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  useEffect(()=> {
    // Efecto para hacer peticiones
    let ignore = false;
    async function Peticion() {
      try {
        const response = await fetch("https://fakestoreapi.com/products"); // fetch a la API que contiene los productos
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
      
      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-white">
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
