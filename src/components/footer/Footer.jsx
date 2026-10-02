import {Link} from 'react-router-dom';


export default function Footer() {
    return (
        <>
            <footer className="bg-slate-900 text-slate-400 mt-12 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 max-w-7x1 mx-auto">
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-semibold mb-3">Contactanos</h2>
                        <ul>
                            <li>Número de contacto: +57 300293840129</li>
                            <li>Correo electrónico: melomamas@chupaloooo.com</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-semibold mb-3">
                            Navegación
                        </h2>
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <Link to="/carrito" className="hover:text-white transition-colors">Carrito</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-semibold mb-3">Sobre nosotros</h2>
                        <p>
                            Esta es una tienda virtual para promociar 
                            productos y conectar de forma más directa con nuestros
                            clientes
                        </p>
                    </div>
                </div>
                
                <div className="border-t border-slate-800 mt-8 pt-6 text-center text-sm">
                    <p>Copyright</p>
                </div>
            </footer>
        </>
    )
}