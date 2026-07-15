SISTEMA DE GESTION DE CLIENTES

Este es un proyecto completo para la gestion de clientes. Permite crear, leer, actualizar y eliminar clientes (CRUD) utilizando Angular en el frontend, Node.js con Express en el backend y PostgreSQL como base de datos.

TECNOLOGIAS UTILIZADAS

- Angular 17
- Node.js
- Express
- TypeScript
- PostgreSQL
- pgAdmin

REQUISITOS PARA EJECUTAR EL PROYECTO

- Node.js instalado
- PostgreSQL instalado
- npm o pnpm instalado

PASOS PARA EJECUTAR EL BACKEND

1. Abrir una terminal
2. Navegar a la carpeta backend
3. Ejecutar el comando: npm install
4. Ejecutar el comando: npm run dev
5. El servidor quedara corriendo en: http://localhost:3001

PASOS PARA EJECUTAR EL FRONTEND

1. Abrir una terminal diferente
2. Navegar a la carpeta frontend
3. Ejecutar el comando: npm install
4. Ejecutar el comando: ng serve --port 4202
5. La aplicacion quedara corriendo en: http://localhost:4202

PASOS PARA CREAR LA BASE DE DATOS

1. Abrir pgAdmin
2. Crear una base de datos llamada: clientes_db
3. Abrir el archivo database.sql
4. Copiar el contenido y ejecutarlo en el Query Tool de pgAdmin
5. Presionar F5 para ejecutar

ENDPOINTS DE LA API

GET /api/clientes - Obtiene todos los clientes
GET /api/clientes/:codigo - Obtiene un cliente por su codigo
POST /api/clientes - Crea un nuevo cliente
PUT /api/clientes/:codigo - Actualiza un cliente existente
DELETE /api/clientes/:codigo - Elimina un cliente

PROMT que se uso 

Actúa como un arquitecto de software Senior Full Stack con experiencia en Angular (última versión estable), Node.js, Express, TypeScript moderno y PostgreSQL.

Debes desarrollar una aplicación completa siguiendo arquitectura limpia, buenas prácticas, código escalable y organizado.

Tecnologías obligatorias
Frontend: Angular
Backend: Node.js + Express
Lenguaje: TypeScript moderno
Base de datos: PostgreSQL
Comunicación mediante API REST
Angular debe consumir el backend mediante HttpClient.

Estructura obligatoria

No elimines ninguna carpeta ni archivo. Puedes agregar los que sean necesarios.

Backend
backend/
│
├── src/
│   ├── controllers/
│   ├── models/
│   ├── persistence/
│   ├── routes/
│   └── app.ts
│
├── data/
│   └── clientes.json
│
├── package.json
└── tsconfig.json

Frontend
frontend/
│
├── src/
│   ├── components/
│   │      ├── cliente-form
│   │      └── cliente-list
│   │
│   ├── models/
│   ├── services/
│   ├── app.component.ts
│   └── main.ts
│
└── angular.json

Modelo Cliente

Crear la entidad Cliente con los siguientes atributos utilizando snake_case.

codigo_cliente
nombre_cliente
direccion_cliente
telefono

No utilizar camelCase en los atributos.

Base de datos PostgreSQL

Crear el script SQL para:

Crear la base de datos.
Crear la tabla clientes.
Llave primaria.
Tipos de datos adecuados.
Inserts de ejemplo.
Backend

Desarrollar completamente:

Modelo
Controlador
Rutas
Persistencia
Conexión a PostgreSQL
CRUD completo

Endpoints:

GET /clientes
GET /clientes/:codigo_cliente
POST /clientes
PUT /clientes/:codigo_cliente
DELETE /clientes/:codigo_cliente

Utilizar:

async/await
módulos ES
TypeScript moderno
manejo de errores
código limpio
separación por capas
Frontend

Crear:

cliente-form

Debe permitir:

Agregar cliente
Editar cliente
Validaciones
Reactive Forms
cliente-list

Debe mostrar:

Tabla de clientes
Buscar clientes
Eliminar clientes
Editar clientes

Consumir el backend mediante HttpClient.

Servicios Angular

Crear un servicio llamado

cliente.service.ts

que implemente todo el CRUD utilizando HttpClient.

Modelo Angular

Crear el modelo espejo del backend.

Estilo

Utilizar un diseño limpio con CSS.

Requisitos
TypeScript moderno.
Código comentado únicamente cuando sea necesario.
Buenas prácticas.
Arquitectura escalable.
Código reutilizable.
No usar JavaScript.
No usar any innecesariamente.
Interfaces cuando sean necesarias.
Tipado estricto.
Separación correcta de responsabilidades.
Restricciones

No eliminar ninguna carpeta indicada.

Se pueden agregar carpetas y archivos, pero nunca eliminar los existentes.

La estructura debe quedar lista para ejecutarse con:

Backend:

npm install
npm run dev

Frontend:

npm install
ng serve
Entrega

Genera el proyecto completo archivo por archivo.

Para cada archivo muestra:

Nombre del archivo
Ruta
Código completo

No omitas ninguna línea de código y espera mi confirmación antes de continuar con el siguiente bloque de archivos para evitar respuestas truncadas.

AUTOR

Taylor Gutierrez
