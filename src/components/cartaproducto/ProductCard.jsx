import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';

export default function ProductCard(props) {
    
    const clickAqui = () => {
        props.onAdd({ id: props.id, nombre:props.nombre, imgURL:props.imgURL, descripcion:props.descripcion, precio:props.precio});
        toast.success(`${props.nombre} agregado al carrito`, {
            duration: 2000,
        });
    }
    return (
        <div className="bg-white border rounded-xl border-slate-700 shadow-md hover:shadow-xl p-4 flex flex-col h-full items-center">
            <Link to={`/producto/${props.id}`} className="flex flex-col grow w-full">
            <img src={props.imgURL} alt={"Imagen de " + props.nombre} className="w-full h-48 object-cover rounded-lg"/>
            <div className="grow">
                <h1 className="text-lg font-bold text-slate-900 group-hover:text-blue-400 transition-colors">{props.nombre}</h1>
                <p className="text-slate-400 text-sm line-clamp-2">Descripción: {props.descripcion}</p>
            </div>
            <p className="text-xl font-extrabold text-green-400">Precio: {props.precio}</p>
            </Link>
            <button onClick={clickAqui} className="w-full py-2.5 px-4 mt-4 bg-blue-600 text-white rounded hover:bg-blue-500 font-medium transition-colors flex items-center justify-center gap-2">Agregar al carrito</button>
        </div>
    )
}