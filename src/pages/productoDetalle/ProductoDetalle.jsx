import { useParams } from 'react-router-dom';
//import {Link} from 'react-router-dom';

export default function ProductoDetalle({productos}) {
    const { id } = useParams(); // Aqui extraigo el id parametrizado en la URL
    const producto = productos.find(elemento => elemento.id === parseInt(id));
    
    return (
        <div className="py-10 px-4">
            { (producto === undefined) ? "Producto no encontrado" :
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8 bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl">
                    <img src={producto.thumbnail} alt={"Imagen de" + producto.title} className="w-full h-80 object-cover rounded-xl"/>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold text-white">{producto.title}</h1>

                        <h2 className="text-lg font-semibold text-slate-200">Descripción:</h2>
                        <p className="text-slate-300 leading-relaxed">{producto.description}</p>

                        <p className="text-2xl font-extrabold text-green-400">Valor Unitario: <span>{producto.price}</span></p>
                    
                    </div>     
                </div>
            }
        </div>
    )
}