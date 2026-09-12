export default function Carrito({carritoCompra}){
    if (carritoCompra.length > 0) {
        return (
            <>
            <ul>
                {carritoCompra.map(producto => 
                    <li key={producto.id}>
                        {producto.nombre} - Cantidad: {producto.cantidad}
                    </li>
                )}
            </ul>
            <p>
                Total carrito: {carritoCompra.reduce((acumulador,producto)=> { 
                    return acumulador+(producto.precio*producto.cantidad)},0)
                }
            </p>
            </>
        )
    }

    return <p>No hay productos en el carrito</p>
}