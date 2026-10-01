export default function SearchBar({ busqueda, setBusqueda}) {
    return (
        <>
            <input type="text"
                value={busqueda}
                onChange={(e)=> setBusqueda(e.target.value)}
                placeholder="Buscar productos..."
                className="border border-gray-800 rounded-lg p-2 mb-4 w-full text-white"
            />
        </>
    )
    
}