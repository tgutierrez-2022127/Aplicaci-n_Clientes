export interface Cliente {
    codigo_cliente?: number;
    nombre_cliente: string;
    direccion_cliente: string;
    telefono: string;
}

export interface ClienteCreate extends Omit<Cliente, 'codigo_cliente'> {}
export interface ClienteUpdate extends Partial<Omit<Cliente, 'codigo_cliente'>> {}

export interface ApiResponse<T = any> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}