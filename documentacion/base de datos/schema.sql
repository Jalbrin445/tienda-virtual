CREATE TABLE categoria (
    id_categoria INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    subcategoria VARCHAR(100) NOT NULL,
    fecha_creacion TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE usuario (
    id_usuario INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    password_hash VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL UNIQUE,
    nombre_usuario VARCHAR(100) NOT NULL UNIQUE,
    rol VARCHAR(20) NOT NULL,
    fecha_creacion TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
    id_producto INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    stock INT NOT NULL DEFAULT 0 CHECK (stock >=0),
    precio_unitario NUMERIC(10, 2) NOT NULL CHECk (precio_unitario >=0),
    descripcion TEXT,
    imagen_url TEXT NOT NULL,
    fecha_creacion TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    id_categoria INT NOT NULL,

    CONSTRAINT fk_categoria_productos
        FOREIGN KEY (id_categoria)
        REFERENCES categoria(id_categoria)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE TABLE ordenes (
    id_orden INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    codigo_orden VARCHAR(50),
    valor_total NUMERIC(10,2) CHECK (valor_total >=0),
    estado VARCHAR(50) NOT NULL DEFAULT 'Espera',
    CONSTRAINT chk_estado_pedido CHECK (estado IN ('Espera', 'Comprado', 'Rechazado')),
    fecha_orden TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    direccion_envio VARCHAR(100) NOT NULL,
    id_usuario INT NOT NULL,
    CONSTRAINT fk_usuario_orden
        FOREIGN KEY (id_usuario)
        REFERENCES usuario(id_usuario)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

CREATE TABLE detalle_orden (
    id_detalle INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cantidad INT NOT NULL CHECK (cantidad >=0),
    precio NUMERIC(10,2) NOT NULL CHECK(precio >= 0),
    id_orden INT NOT NULL,
    CONSTRAINT fk_detalle_orden
        FOREIGN KEY (id_orden)
        REFERENCES ordenes(id_orden)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,

    id_producto INT NOT NULL,
    CONSTRAINT fk_detalle_producto
        FOREIGN KEY (id_producto)
        REFERENCES productos(id_producto)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);