import { useState } from 'react';
//import heroImg from './assets/hero.png'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import ProductCard from '../../components/cartaproducto/ProductCard.jsx';
//import Carrito from '../components/Carrito.jsx';
import SearchBar from '../../components/navBar/SearchBar.jsx';
//import {Link} from 'react-router-dom';
import '../../App.css';

function Home({ agregarCarrito, productos, loading, error}) {
  // Estados para compartir entre renderizaciones
  
  const [busqueda, setBusqueda] = useState("");

  let productosFiltrados = productos.filter(producto => {
    return producto.title.toLowerCase().includes(busqueda.toLowerCase())
  });

  return (
    <>
      <SearchBar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />
      {loading && <p>Cargando...</p>}
      {error && <p>{error}</p>}
      {(productosFiltrados.length === 0 && busqueda !== "") ?  <p>No se encontraron productos</p>: ""}
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-black">
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