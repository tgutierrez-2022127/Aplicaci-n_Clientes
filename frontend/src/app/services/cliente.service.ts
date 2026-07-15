import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Cliente, ClienteCreate, ClienteUpdate, ApiResponse } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {
    private apiUrl = 'http://localhost:3001/api/clientes';

    constructor(private http: HttpClient) {}

    getClientes(): Observable<Cliente[]> {
        return this.http.get<ApiResponse<Cliente[]>>(this.apiUrl)
            .pipe(map(response => response.data || []));
    }

    createCliente(cliente: ClienteCreate): Observable<Cliente> {
        return this.http.post<ApiResponse<Cliente>>(this.apiUrl, cliente)
            .pipe(map(response => response.data as Cliente));
    }

    updateCliente(codigo: number, cliente: ClienteUpdate): Observable<Cliente> {
        return this.http.put<ApiResponse<Cliente>>(`${this.apiUrl}/${codigo}`, cliente)
            .pipe(map(response => response.data as Cliente));
    }

    deleteCliente(codigo: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${codigo}`);
    }
}