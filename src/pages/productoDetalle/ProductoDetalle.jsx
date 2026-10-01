import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default function ProductoDetalle({productos}) {
    const { id } = useParams(); // Aqui extraigo el id parametrizado en la URL
    const producto = productos.find(elemento => elemento.id === parseInt(id));
    
    return (
        <>
            <Link to="/">Ir a Home</Link>
            { (producto === undefined) ? "Producto no encontrado" :
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center text-black">
                    <img src={producto.thumbnail} alt={"Imagen de" + producto.title} className="w-full h-48 object-cover rounded-md"/>
                    <h1>{producto.title}</h1>

                    <h2>Descripción:</h2>
                    <p>{producto.description}</p>

                    <p>Valor Unitario: <span>{producto.price}</span></p>
                    
                                
                </div>
            }
        </>
    )
}