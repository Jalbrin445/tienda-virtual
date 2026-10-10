import { useNavigate } from 'react-router-dom';

export default function Carrito({carritoCompra, onEliminar, onVaciar}){
    const navigate = useNavigate();

    function handlePago() {
        navigate("/checkout");
    }
    
    function handleVolverHome() {
        navigate("/")
    }
    
    if (carritoCompra.length > 0) {
        return (
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold text-white mb-8">Carrito</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-2">
                        <ul className="flex flex-col gap-4">
                            {carritoCompra.map(producto => 
                                <li key={producto.id} className="flex items-center justify-between bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-md">
                                    <img src={producto.imgURL} alt={producto.name} className="w-16 h-16 object-cover rounded-lg"/>
                                    <div className="grow px-4">
                                        <p>{producto.nombre}</p>
                                        <p>Cantidad: {producto.cantidad}</p>
                                        <p>Precio: {producto.precio}</p>
                                    </div>
                                    <button onClick={e => {
                                        e.stopPropagation();
                                        onEliminar(producto.id)
                                    }} className="px-4 bg-red-500 text-white rounded hover:bg-red-700">
                                        Eliminar
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                        <div className="lg:col-span-1">
                            <div className="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl sticky top-24">
                            <h2 className="text-xl font-bold text-white mb-4">Resumen del pedido</h2>
                            <div className="flex justify-between items-center text-lg font-bold text-white mb-6">
                                <h3>Total carrito:</h3>
                                
                                <p className="text-green-400">{carritoCompra.reduce((acumulador,producto)=> { 
                                    return acumulador+(producto.precio*producto.cantidad)},0)
                                }</p>
                            </div>
                            <div className="flex flex-col gap-3">
                            <button onClick={handlePago} className="w-full py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-lg shadow-lg transition-colors">Pagar Carrito</button>
                            <button onClick={onVaciar} className="w-full py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-red-700 hover:text-white font-medium transition-colors text-sm">Vaciar Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="py-20 px-4 flex flex-col items-center justify-center text-center">
            <div className="bg-slate-800 rounded-2xl border-slate-700 p-8 md:p-12 max-w-md w-full">
                <h2 className="text-2xl font-bold text-white mb-2">No ha seleccionado productos</h2>
                <p className="text-slate-400 mb-6 leading-relaxed">Para ver su carrito debe seleccionar por lo menos una unidad de cualquier producto</p>
                <button onClick={handleVolverHome} className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Volver a Home
                    </button>
            </div>
        </div>

    )
}