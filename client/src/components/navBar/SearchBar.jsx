export default function SearchBar({ busqueda, setBusqueda}) {
    return (
        
        <div className="max-w-md mx-auto my-6 px-4">
            <input type="text"
                value={busqueda}
                onChange={(e)=> setBusqueda(e.target.value)}
                placeholder="Buscar productos..."
                className="border border-slate-300 rounded-lg py-2.6 px-4 w-full shadow-sm text-black my-4 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
        </div>
    )
}