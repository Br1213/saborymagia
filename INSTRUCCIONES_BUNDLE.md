# Instrucciones para importar el proyecto Sabor y Magia desde el bundle

Este archivo contiene instrucciones para importar el proyecto "Sabor y Magia" desde el archivo bundle que has descargado.

## ¿Qué es un bundle de Git?

Un bundle de Git es un archivo que contiene toda la información de un repositorio Git, incluyendo todos los commits, ramas, etiquetas y archivos. Es como una copia comprimida del repositorio completo.

## Cómo importar el proyecto

Sigue estos pasos para importar el proyecto a tu propia cuenta de GitHub:

### 1. Crea un nuevo repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión en tu cuenta
2. Haz clic en el botón "+" en la esquina superior derecha y selecciona "New repository"
3. Nombra el repositorio "saborymagia" (o el nombre que prefieras)
4. Deja el repositorio vacío (no inicialices con README, .gitignore o licencia)
5. Haz clic en "Create repository"

### 2. Clona el bundle en tu computadora

1. Descarga el archivo `saborymagia.bundle` a tu computadora
2. Abre una terminal o línea de comandos
3. Crea un directorio para el proyecto:
   ```
   mkdir saborymagia
   cd saborymagia
   ```
4. Inicializa un repositorio Git vacío:
   ```
   git init
   ```
5. Extrae el contenido del bundle:
   ```
   git fetch /ruta/a/saborymagia.bundle HEAD:main
   ```
   (Reemplaza `/ruta/a/saborymagia.bundle` con la ruta real al archivo bundle en tu computadora)
6. Cambia a la rama principal:
   ```
   git checkout main
   ```

### 3. Conecta tu repositorio local con GitHub y sube el código

1. Añade el repositorio remoto:
   ```
   git remote add origin https://github.com/TU-USUARIO/saborymagia.git
   ```
   (Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub)
2. Sube el código a GitHub:
   ```
   git push -u origin main
   ```

¡Listo! Ahora tienes el proyecto "Sabor y Magia" en tu cuenta de GitHub.

## Estructura del proyecto

El proyecto "Sabor y Magia" es un sitio web de recetas en español con las siguientes características:

- Diseño responsive adaptable a diferentes dispositivos
- Múltiples páginas de recetas con instrucciones detalladas
- Secciones de blog, acerca de y contacto
- Backend simple con Flask para servir el sitio

## Cómo ejecutar el proyecto

Una vez que hayas importado el proyecto, puedes ejecutarlo localmente siguiendo estas instrucciones:

1. Asegúrate de tener Python instalado
2. Instala las dependencias:
   ```
   pip install flask gunicorn
   ```
3. Ejecuta el servidor:
   ```
   python main.py
   ```
4. Abre tu navegador y visita: `http://localhost:5000`