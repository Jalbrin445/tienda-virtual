import { useNavigate, Link } from 'react-router-dom';

export default function Checkout({carrito, vaciarCarrito}) {
    const navigate = useNavigate();
    function handleCheckout() {
        alert("Compra exitosa");
        vaciarCarrito();
        navigate("/", {replace:true});
    }
    function handleNotCheckout() {
        alert("Ha rechazado su compra");
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