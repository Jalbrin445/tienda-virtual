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
        <div className="border rounded-lg shadow-lg p-4 flex flex-col items-center">
            <Link to={`/producto/${props.id}`}>
            <img src={props.imgURL} alt={"Imagen de " + props.nombre} className="w-full h-48 object-cover rounded-md"/>
            <h1 className="text-xl font-bold mt-2">{props.nombre}</h1>
            <p className="text-lg mt-2">Descripción: {props.descripcion}</p>
            <p className="text-lg text-green-600">Precio: {props.precio}</p>
            </Link>
            <button onClick={clickAqui} className="px-4 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700">Agregar al carrito</button>
        </div>
    )
}