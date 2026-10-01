export default async function obtenerProductos() {
    const response = await fetch("https://dummyjson.com/products"); // fetch a la API que contiene los productos
    const responseJson = await response.json();

    return responseJson.products
}