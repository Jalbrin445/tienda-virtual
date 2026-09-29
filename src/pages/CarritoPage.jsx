import Carrito from '../components/Carrito.jsx';
import {Link} from 'react-router-dom';

export default function CarritoPage({carritoCompra, onEliminar, onVaciar}){
    
    return (
        <>
            <Link to="/">Ir a Home</Link>
            <Carrito carritoCompra={carritoCompra} onEliminar={onEliminar} onVaciar={onVaciar} />
        </>
    )
    
}