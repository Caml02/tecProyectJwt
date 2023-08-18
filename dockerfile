# Establece la imagen base
FROM node:16

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json a la carpeta de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos al contenedor
COPY . .

# Compila la aplicación
RUN npm run build

# Expone el puerto en el que la aplicación estará en ejecución
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "node", "dist/main" ]
