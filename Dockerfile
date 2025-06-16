# Usa la imagen oficial de Node.js (versión 24)
FROM node:24

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala dependencias
RUN npm install

# Copia todo el proyecto al contenedor
COPY . .

# Expone el puerto por defecto de React (3000)
EXPOSE 5173

# Comando para iniciar la app en modo desarrollo
CMD ["npm", "start"]
