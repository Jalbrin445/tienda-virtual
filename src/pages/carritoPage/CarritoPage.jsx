import Carrito from '../../components/carrito/Carrito.jsx';
//import {Link} from 'react-router-dom';

export default function CarritoPage({carritoCompra, onEliminar, onVaciar}){
    
    return (
        <>
            <Carrito carritoCompra={carritoCompra} onEliminar={onEliminar} onVaciar={onVaciar} />
        </>
    )
    
}