import { useState, useEffect } from 'react';
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import ProductCard from '../components/ProductCard.jsx';
//import Carrito from '../components/Carrito.jsx';
import SearchBar from '../components/SearchBar.jsx';
import {Link} from 'react-router-dom';
import '../App.css';

function Home({ carrito, agregarCarrito}) {
  // Estados para compartir entre renderizaciones
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [busqueda, setBusqueda] = useState("");

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
  
  


  let productosFiltrados = productos.filter(producto => {
    return producto.title.toLowerCase().includes(busqueda.toLowerCase())
  });

  return (
    <>
      <Link to="/carrito">Ir al carrito {carrito.length}</Link>
      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {(productosFiltrados.length === 0 && busqueda !== "") ?  <p>No se encontraron productos</p>: ""}
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-white">
        {!loading && error === null && productosFiltrados.map(producto => 
          <ProductCard
            key={producto.id}
            id={producto.id}
            nombre={producto.title}
            imgURL={producto.thumbnail}
            descripcion={producto.description}
            precio={producto.price}
            onAdd={agregarCarrito}
        />
          )}
        
      </div>
    </>
  )
}

export default Home