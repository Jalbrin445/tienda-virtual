export default function Carrito({carritoCompra, onEliminar, onVaciar}){
    if (carritoCompra.length > 0) {
        return (
            <>
            <ul>
                {carritoCompra.map(producto => 
                    <li key={producto.id} className="">
                        <span>{producto.nombre} - Cantidad: {producto.cantidad}</span>
                        <button onClick={e => {
                            e.stopPropagation();
                            onEliminar(producto.id)
                        }} className="px-4 mt-4 bg-red-500 text-white rounded hover:bg-red-700">
                            Eliminar
                        </button>
                    </li>
                )}
            </ul>
            <p>
                Total carrito: {carritoCompra.reduce((acumulador,producto)=> { 
                    return acumulador+(producto.precio*producto.cantidad)},0)
                }
            </p>
            <button onClick={onVaciar} className="px-4 mt-4 bg-red-500 text-white rounded hover:bg-red-700">Vaciar Carrito</button>
            </>
        )
    }

    return <p>No hay productos en el carrito</p>
}