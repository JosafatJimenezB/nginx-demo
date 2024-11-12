# SSL y NGINX: El Dúo Dinámico que Tu App Necesita para No Desmoronarse

Bienvenido al repositorio del proyecto presentado en la charla "SSL y NGINX: El Dúo Dinámico que Tu App Necesita para No Desmoronarse". Este proyecto es un entorno práctico que utiliza React para la interfaz y Docker para manejar el despliegue de NGINX como servidor proxy inverso con SSL, simplificando la gestión y la seguridad en aplicaciones web.

## :bulb: Descripción del Proyecto

Este proyecto contiene:
- Una aplicación básica de React.
- Dockerfile para construir la aplicación de React.
- Docker Compose para levantar el entorno completo, incluyendo un contenedor para la aplicación y otro para NGINX configurado como proxy inverso con SSL.

Este entorno permite ver de manera práctica cómo configurar un proxy inverso y habilitar HTTPS usando NGINX y Docker, creando un flujo de trabajo que puedes replicar en proyectos reales.

## :rocket: Tecnologias Utilizadas

- **React**: Framework de frontend para la interfaz de usuario.
- **NGINX**: Servidor web y proxy inverso para gestionar peticiones y configurar SSL.
- **Docker & Docker Compose**: Para contenerizar la aplicación y orquestar los contenedores.

## :gear: Uso del Docker compose 

 Uso del Docker Compose

El archivo `docker-compose.yml` configura y orquesta los contenedores de la aplicación y NGINX.

### Construcción y Despliegue
Para construir y levantar el entorno completo, ejecuta:
```bash
docker-compose up --build
```
Este comando:

- Construye la imagen de Docker para la aplicación de React.
- Levanta los contenedores de la aplicación y configura con NGINX.

### Acceso a la Aplicación
Una vez desplegado, podrás acceder a la aplicación en tu navegador en la siguiente URL:
```
https://localhost o <tu nombre de dominio>
```

### :hammer_and_wrench: Comandos Útiles


Parar el entorno:
```bash
docker-compose down
```

Ver logs en tiempo real:
```bash
docker-compose logs -f
```


Reconstruir contenedores:
```bash
docker-compose up --build
```

¡Gracias por revisar este proyecto! Espero que te sea útil para entender cómo implementar un entorno de desarrollo seguro con React, NGINX y Docker.


###### made with :sparkling_heart: by JosafatJimenezB :mexico:
