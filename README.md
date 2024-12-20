0. Antes que nada el archivo descargado debes meterlo en una carpeta y renombrarlo a `` server ``

1. Tener Docker Instalado en tu computador

2. Si quieres ver la base de datos en un interfas grafica descargar Table Plus

3. Abrir la terminal de visual studio code y escribir el comando ``cd server``

4. En la terminal escribir el comando `` npm install  ``

5. Crear un archivo `` .env `` y pegar el contenido del archivo ```.env.template`` en el archivo ``.env``  

6. Antes de levantar la base de datos tienes que hacer lo siguente
    > Abrir otra terminal
    > Escribir el comando `` cd server ``
    > Luego escribir el comando `` docker compose up -d `` para montar la imagen de postgresql
    > Despues de descargada la imagen puede cerrar la terminal donde escribiste el comando de la linea de arriba

7. Nos ubicamos en la terminal que esta el la ruta de server

8. Escribimos `` npx prisma migrate dev `` para hacer las migraciones de la base de datos

9. Escribimos el comando `` npm start ``

`` Listo ya tenemos el backend montado ``
