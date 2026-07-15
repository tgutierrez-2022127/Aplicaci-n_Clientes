import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
    selector: 'app-cliente-list',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
    clientes: Cliente[] = [];
    selectedCliente: Cliente | null = null;
    showForm = false;
    loading = false;
    error = '';
    successMessage = '';
    isSubmitting = false;

    constructor(private clienteService: ClienteService) {}

    ngOnInit(): void {
        this.loadClientes();
    }

    loadClientes(): void {
        this.loading = true;
        this.error = '';
        this.successMessage = '';
        
        this.clienteService.getClientes().subscribe({
            next: (data) => {
                this.clientes = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = err.message || 'Error al cargar clientes';
                this.loading = false;
                setTimeout(() => this.error = '', 5000);
            }
        });
    }

    onSaveCliente(clienteData: Cliente): void {
        this.isSubmitting = true;
        this.error = '';
        this.successMessage = '';

        if (clienteData.codigo_cliente) {
            this.clienteService.updateCliente(clienteData.codigo_cliente, clienteData).subscribe({
                next: (cliente) => {
                    this.successMessage = ` Cliente "${cliente.nombre_cliente}" actualizado`;
                    this.loadClientes();
                    this.cancelForm();
                    this.isSubmitting = false;
                    setTimeout(() => this.successMessage = '', 3000);
                },
                error: (err) => {
                    this.error = err.message || 'Error al actualizar';
                    this.isSubmitting = false;
                    setTimeout(() => this.error = '', 5000);
                }
            });
        } else {
            this.clienteService.createCliente(clienteData).subscribe({
                next: (cliente) => {
                    this.successMessage = ` Cliente "${cliente.nombre_cliente}" creado`;
                    this.loadClientes();
                    this.cancelForm();
                    this.isSubmitting = false;
                    setTimeout(() => this.successMessage = '', 3000);
                },
                error: (err) => {
                    this.error = err.message || 'Error al crear';
                    this.isSubmitting = false;
                    setTimeout(() => this.error = '', 5000);
                }
            });
        }
    }

    editCliente(cliente: Cliente): void {
        this.selectedCliente = { ...cliente };
        this.showForm = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    deleteCliente(codigo: number, nombre: string): void {
        if (confirm(`¿Eliminar a "${nombre}"?`)) {
            this.loading = true;
            this.clienteService.deleteCliente(codigo).subscribe({
                next: () => {
                    this.successMessage = ` "${nombre}" eliminado`;
                    this.loadClientes();
                    this.loading = false;
                    setTimeout(() => this.successMessage = '', 3000);
                },
                error: (err) => {
                    this.error = err.message || 'Error al eliminar';
                    this.loading = false;
                    setTimeout(() => this.error = '', 5000);
                }
            });
        }
    }

    showNewClienteForm(): void {
        this.selectedCliente = null;
        this.showForm = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    cancelForm(): void {
        this.showForm = false;
        this.selectedCliente = null;
        this.error = '';
    }
}