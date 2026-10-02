import { Link } from 'react-router-dom';
export default function NavBar({cantidadProductos}) {
    return (
        <>
            <nav className="flex justify-between items-center px-6 py-4 sticky top-0 z-50 bg-slate-900 text-slate-200 font-semibold">
                <div>
                    <img src="/favicon.svg" alt="Icono de la tienda" className="w-8 h-8"/>
                </div>
                <div className="flex gap-6">
                    <Link to="/" className=" hover:text-blue-400 transition-colors">Home</Link>
                    <Link to="/carrito" className="relative hover:text-blue-400 transition-colors">
                        Carrito 
                        {cantidadProductos > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                                {cantidadProductos}
                            </span>
                        )}
                        
                    </Link>
                </div>
            </nav>
        </>
    )
}