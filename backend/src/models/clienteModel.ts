import pool from '../persistence/database';

export interface Cliente {
    codigo_cliente?: number;
    nombre_cliente: string;
    direccion_cliente: string;
    telefono: string;
}

export class ClienteModel {
    static async getAll() {
        const result = await pool.query('SELECT * FROM clientes ORDER BY codigo_cliente ASC');
        return result.rows;
    }

    static async getByCodigo(codigo: number) {
        const result = await pool.query('SELECT * FROM clientes WHERE codigo_cliente = $1', [codigo]);
        return result.rows[0] || null;
    }

    static async create(cliente: Omit<Cliente, 'codigo_cliente'>) {
        const { nombre_cliente, direccion_cliente, telefono } = cliente;
        const result = await pool.query(
            'INSERT INTO clientes (nombre_cliente, direccion_cliente, telefono) VALUES ($1, $2, $3) RETURNING *',
            [nombre_cliente, direccion_cliente, telefono]
        );
        return result.rows[0];
    }

    static async update(codigo: number, cliente: Partial<Cliente>) {
        const { nombre_cliente, direccion_cliente, telefono } = cliente;
        const updates: string[] = [];
        const values: any[] = [];
        let paramCount = 1;

        if (nombre_cliente) {
            updates.push(`nombre_cliente = $${paramCount++}`);
            values.push(nombre_cliente);
        }
        if (direccion_cliente) {
            updates.push(`direccion_cliente = $${paramCount++}`);
            values.push(direccion_cliente);
        }
        if (telefono) {
            updates.push(`telefono = $${paramCount++}`);
            values.push(telefono);
        }

        if (updates.length === 0) return null;

        values.push(codigo);
        const query = `
            UPDATE clientes 
            SET ${updates.join(', ')} 
            WHERE codigo_cliente = $${paramCount} 
            RETURNING *
        `;

        const result = await pool.query(query, values);
        return result.rows[0] || null;
    }

    static async delete(codigo: number) {
        const result = await pool.query('DELETE FROM clientes WHERE codigo_cliente = $1', [codigo]);
        return (result.rowCount || 0) > 0;
    }
}