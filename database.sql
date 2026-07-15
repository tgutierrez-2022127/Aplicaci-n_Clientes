-- ============================================
-- BASE DE DATOS PARA GESTIÓN DE CLIENTES
-- ============================================

-- 1. Crear la base de datos
CREATE DATABASE clientes_db;

-- 2. Conectar a la base de datos
\c clientes_db;

-- 3. Crear la tabla clientes
CREATE TABLE IF NOT EXISTS clientes (
    codigo_cliente SERIAL PRIMARY KEY,
    nombre_cliente VARCHAR(100) NOT NULL,
    direccion_cliente VARCHAR(200) NOT NULL,
    telefono VARCHAR(20) NOT NULL UNIQUE
);

-- 4. Insertar datos de ejemplo
INSERT INTO clientes (nombre_cliente, direccion_cliente, telefono) VALUES
    ('Empresa ABC', 'Calle Principal #123', '5551234567'),
    ('Corporación XYZ', 'Avenida Central #456', '5559876543');

-- 5. Verificar los datos
SELECT * FROM clientes;
