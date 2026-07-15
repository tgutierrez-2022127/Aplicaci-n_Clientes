import { Request, Response } from 'express';
import { ClienteModel } from '../models/clienteModel';

export class ClienteController {
    static async getAll(req: Request, res: Response) {
        try {
            const clientes = await ClienteModel.getAll();
            res.json({ success: true, data: clientes });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Error al obtener clientes' });
        }
    }

    static async getByCodigo(req: Request, res: Response) {
        try {
            const codigo = parseInt(req.params.codigo);
            const cliente = await ClienteModel.getByCodigo(codigo);
            
            if (!cliente) {
                return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
            }
            
            res.json({ success: true, data: cliente });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Error al obtener cliente' });
        }
    }

    static async create(req: Request, res: Response) {
        try {
            const { nombre_cliente, direccion_cliente, telefono } = req.body;
            
            if (!nombre_cliente || !direccion_cliente || !telefono) {
                return res.status(400).json({ success: false, error: 'Todos los campos son requeridos' });
            }

            const nuevoCliente = await ClienteModel.create({
                nombre_cliente,
                direccion_cliente,
                telefono
            });
            
            res.status(201).json({ success: true, data: nuevoCliente });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Error al crear cliente' });
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const codigo = parseInt(req.params.codigo);
            const { nombre_cliente, direccion_cliente, telefono } = req.body;
            
            const clienteActualizado = await ClienteModel.update(codigo, {
                nombre_cliente,
                direccion_cliente,
                telefono
            });
            
            if (!clienteActualizado) {
                return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
            }
            
            res.json({ success: true, data: clienteActualizado });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Error al actualizar cliente' });
        }
    }

    static async delete(req: Request, res: Response) {
        try {
            const codigo = parseInt(req.params.codigo);
            const eliminado = await ClienteModel.delete(codigo);
            
            if (!eliminado) {
                return res.status(404).json({ success: false, error: 'Cliente no encontrado' });
            }
            
            res.json({ success: true, message: 'Cliente eliminado' });
        } catch (error) {
            res.status(500).json({ success: false, error: 'Error al eliminar cliente' });
        }
    }
}