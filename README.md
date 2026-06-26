# AdminDashboard - Angular Engine

**AdminDashboard** es un panel de administración desarrollado en **Angular 19+** con **TypeScript**. La aplicación utiliza una arquitectura basada en componentes y servicios para consumir datos desde una API REST y mostrarlos de forma dinámica en una interfaz moderna. Además, está configurada en modo **Zoneless** para optimizar el rendimiento de la aplicación.

---

## Tecnologías utilizadas

- Angular 19+
- TypeScript 5+
- Node.js
- npm
- RxJS
- HTML5
- CSS3

---

## Arquitectura del proyecto

El proyecto está organizado de la siguiente manera:

```text
src/
└── app/
    ├── models/        # Interfaces de TypeScript
    ├── services/      # Servicios HTTP
    ├── app.html       # Vista principal
    ├── app.ts         # Componente principal
    └── app.config.ts  # Configuración de la aplicación
```

### Descripción de cada componente

- **models:** contiene las interfaces (`Usuario` y `Tarea`) utilizadas para tipar la información recibida desde la API.
- **services:** centraliza las peticiones HTTP utilizando `HttpClient` y `Observables`.
- **app.html:** muestra la información mediante renderizado dinámico con directivas como `*ngIf` y `*ngFor`.
- **app.ts:** administra la lógica principal de la aplicación, carga los datos y controla el ciclo de vida del componente.
- **app.config.ts:** contiene la configuración general del proyecto, incluyendo la configuración Zoneless.

---

## Consumo de la API

La aplicación obtiene información desde la API pública **JSONPlaceholder**, utilizando los siguientes recursos:

- **Usuarios:** muestra el listado de usuarios registrados.
- **Tareas (Todos):** presenta una lista de tareas con su estado de completado.

---

## Requisitos

Antes de ejecutar el proyecto asegúrate de tener instalado:

- Node.js 18 o superior
- npm
- Angular CLI
- Git (opcional para clonar el repositorio)

---

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/ricardoJGC11/admin-dashboard-angular.git
cd admin-dashboard-angular
```

### 2. Instalar las dependencias

```bash
npm install
```

---

### 3. Ejecutar el servidor de desarrollo

```bash
ng serve
```

---

### 4. Acceder a la aplicación

Abre tu navegador y visita:

```text
http://localhost:4200
```

La aplicación se actualizará automáticamente al realizar cambios en el código (Hot Reload).

---

## Características

- Arquitectura basada en componentes Standalone.
- Configuración Zoneless para mejorar el rendimiento.
- Tipado estricto mediante interfaces de TypeScript.
- Consumo de API REST utilizando `HttpClient` y `Observables`.
- Renderizado dinámico con Angular.
- Interfaz limpia y reactiva.
- Organización modular para facilitar el mantenimiento y la escalabilidad.

---

## Autor

**Ricardo JGC**

GitHub: https://github.com/ricardoJGC11