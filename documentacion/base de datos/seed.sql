INSERT INTO categorias (nombre, subcategoria)
VALUES 
    ('Electrónica', 'IoT'), 
    ('Ropa y Accesorios', 'Pantalones');

INSERT INTO usuario (nombre, password_hash, correo,nombre_usuario, rol)
VALUES 
    ('Juan Albrin Meza Guzmán', 'Jalbrin123', 'mezaguzman@gmail.com', 'JAMG445', 'administrador'), 
    ('Juanito Perez', 'JuanitoPerez123', 'juanitoperez@gmail.com', 'juanitoPerez12', 'cliente');

INSERT INTO productos (nombre, stock, precio_unitario,descripcion, imagen_url,id_categoria)
VAlUES 
    ('Arduino', 9,31000,'Placa de desarrollo para prototipos en electrónica, con microcontrolador ATMEGA328p', 'https://drive.google.com/file/d/1sfXYMvS9y7ZqZ0L8j4ppWMuXU0n0R8-p/view?usp=sharing', 1),
    ('ESP32', 7,45000, 'Placa de desarrollo con conectividad bluetooth y WIFI', 'https://drive.google.com/file/d/1hSdoEDG0Y68QiIQ3y0TJUC0WaDMjvz_K/view?usp=sharing',1),
    ('Pantalon GEF Hombre',6,100000, 'Este es un pantalon comodo de tela muy fina y hecho en algodon de chivo', 'https://drive.google.com/file/d/13vVUzcPwggt0vhPgHkxyqf6BGW12BUQg/view?usp=sharing',2),
    ('Pantaloneta GEF', 6,86000,'Esta es una pantaloneta GEF', 'https://drive.google.com/file/d/1xTpBiBRe8FbJxDZQdL-f8FI-IJTCjK6k/view?usp=sharing',2);

INSERT INTO ordenes (codigo_orden, valor_total, estado, direccion_envio, id_usuario)
VALUES
    ('ORD-1', 62000,'Espera', 'Calle 82 # 120a - 89 Apartadó (Antioquia), Barrio Alfonso Velez',2);

INSERT INTO detalle_orden (cantidad, precio, id_orden, id_producto)
VALUES
    (2, 62000, 1, 1);
