import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export default function Checkout({carrito, vaciarCarrito}) {
    const navigate = useNavigate();
    function handleCheckout(e) {
        e.preventDefault();
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
        <div className="max-w-5xl mx-auto px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl">
                    <h1 className="text-xl font-bold text-white mb-6">Datos de envío</h1>
                    <form id="checkout-form" onSubmit={handleCheckout} className="flex flex-col gap-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Nombre Completo</label>
                            <input required id="name" type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/> 
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Correo Electrónico</label>
                            <input required id="email" type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/> 
                        </div>
                        <div>
                            <label htmlFor="direccion" className="block text-sm font-medium text-slate-300 mb-1">Dirección</label>
                            <input required id="direccion" type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/> 
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="telefono" className="block text-sm font-medium text-slate-300 mb-1">Telefono</label>
                                <input required id="telefono" type="tel" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"/> 
                            </div>
                        </div>
                    </form>
                </div>
                <div className="lg:col-span-5 bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-xl sticky top-24">
                <h2 className="text-xl font-bold text-white mb-4">Resumen del Pedido</h2>
                <ul className="flex flex-col gap-3 max-h-60 overflow-y-auto mb-6 pr-2">
                    {carrito.map(producto => 
                        <li key={producto.id} className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg bordeer border-slate-700/50 text-sm text-white">
                            <span>{producto.nombre} - Cantidad: {producto.cantidad}</span>
                        </li>
                    )}
                </ul>
                <div>
                    <p className="flex justify-between items-center text-lg font-bold text-white pt-4 border-t border-slate-700 mb-6">
                        Total carrito: {carrito.reduce((acumulador,producto)=> { 
                                return acumulador+(producto.precio*producto.cantidad)},0)
                        }
                    </p>
                </div>
                <button type="submit" form="checkout-form" className="w-full py-3.5 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg transition-colors mb-3">Comprar</button>
                <button onClick={handleNotCheckout} className="w-full py-2 bg-slate-700 text-slate-300 rounded-lg hover:bg-red-600 hover:text-white font-medium transition-colors text-sm">Cancelar Compra</button>
                </div>
            </div>
        </div>
    )
}