<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# KAIA - Taller de Estampado

Este es el sitio web completo de **KAIA**, un taller de estampado y personalización con sede en Madrid.

## 🚀 Despliegue en Netlify

Para desplegar este sitio en Netlify de forma gratuita:

1.  **Sube este código a GitHub.**
2.  Entra en [app.netlify.com](https://app.netlify.com).
3.  Haz clic en **"Add new site"** > **"Import an existing project"**.
4.  Selecciona tu repositorio de GitHub.
5.  Netlify detectará automáticamente que es un proyecto de Next.js.
    *   **Build command:** `npm run build`
    *   **Publish directory:** `.next`
6.  Haz clic en **"Deploy"**.

El archivo `netlify.toml` incluido ya tiene la configuración necesaria para que todo funcione correctamente.

## 🛠️ Desarrollo Local

**Requisitos:** Node.js v18+

1.  Instala las dependencias:
    ```bash
    npm install
    ```
2.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
3.  Abre [http://localhost:3000](http://localhost:3000).

## 🔐 Panel de Administración

Para acceder al panel de control y modificar el contenido (los cambios se guardan en el navegador mediante `localStorage`):

*   **Ruta:** `/login`
*   **Usuario:** `admin@kaia.es`
*   **Contraseña:** `admin123`
