import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ProductCard from './components/ProductCard.jsx'
import Carrito from './components/Carrito.jsx'

import './App.css'

function App() {
  const [carrito, setCarrito] = useState([]);

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
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-cente text-white">
        {listProductos.map(producto=> 
          <ProductCard
            key={producto.id}
            id={producto.id}
            nombre={producto.name}
            imgURL={producto.imgURL}
            descripcion={producto.descripcion}
            precio={producto.precio}
            onAdd={agregarCarrito}
        />
        )}
        
      </div>
      <div>
          <Carrito 
            carritoCompra={carrito}
          />
        </div>
    </>
  )
}

export default App
