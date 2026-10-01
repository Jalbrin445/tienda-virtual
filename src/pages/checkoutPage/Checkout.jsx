import { useNavigate, Link } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Checkout({carrito, vaciarCarrito}) {
    const navigate = useNavigate();
    function handleCheckout() {
        toast.success('Compra realizada con éxito', {
            duration: 2000,
        });
        vaciarCarrito();
        navigate("/", {replace:true});
    }
    function handleNotCheckout() {
        toast.success("Ha rechazado su compra", {
            duration: 2000,
        });
        navigate("/carrito");
    }
    
    return (
        <>
        <Link to="/carrito">Ir a Carrito de compra</Link>
        <ul>
            {carrito.map(producto => 
                    <li key={producto.id} className="">
                        <span>{producto.nombre} - Cantidad: {producto.cantidad}</span>
                </li>
            )}
        </ul>
        <p>
            Total carrito: {carrito.reduce((acumulador,producto)=> { 
                    return acumulador+(producto.precio*producto.cantidad)},0)
            }
        </p>
        <button onClick={handleCheckout}>Comprar</button>
        <button onClick={handleNotCheckout}>Cancelar Compra</button>
        </>
    )
}