import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../models/cliente.model';

@Component({
    selector: 'app-cliente-form',
    templateUrl: './cliente-form.component.html',
    styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnChanges {
    @Input() cliente?: Cliente | null;
    @Input() isSubmitting = false;
    @Output() clienteSaved = new EventEmitter<Cliente>();
    @Output() cancel = new EventEmitter<void>();

    clienteForm: FormGroup;
    isEditing = false;

    constructor(private fb: FormBuilder) {
        this.clienteForm = this.fb.group({
            nombre_cliente: ['', [Validators.required, Validators.minLength(3)]],
            direccion_cliente: ['', [Validators.required, Validators.minLength(5)]],
            telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{7,15}$/)]]
        });
    }

    ngOnChanges(): void {
        if (this.cliente) {
            this.isEditing = true;
            this.clienteForm.patchValue({
                nombre_cliente: this.cliente.nombre_cliente,
                direccion_cliente: this.cliente.direccion_cliente,
                telefono: this.cliente.telefono
            });
        } else {
            this.isEditing = false;
            this.clienteForm.reset();
        }
    }

    onSubmit(): void {
        if (this.clienteForm.valid) {
            const clienteData = this.clienteForm.value;
            if (this.isEditing && this.cliente?.codigo_cliente) {
                clienteData.codigo_cliente = this.cliente.codigo_cliente;
            }
            this.clienteSaved.emit(clienteData);
        }
    }

    onCancel(): void {
        this.cancel.emit();
    }
}