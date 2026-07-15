import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'clientes_db',
});

export const initializeDatabase = async () => {
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS clientes (
            codigo_cliente SERIAL PRIMARY KEY,
            nombre_cliente VARCHAR(100) NOT NULL,
            direccion_cliente VARCHAR(200) NOT NULL,
            telefono VARCHAR(20) NOT NULL UNIQUE
        );
    `;
    
    try {
        await pool.query(createTableQuery);
        console.log(' Tabla clientes creada/verificada');
    } catch (error) {
        console.error(' Error al crear tabla:', error);
        throw error;
    }
};

export default pool;