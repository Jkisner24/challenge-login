# challengeLogin

## Requisitos

- Docker
- Docker Compose

## Configuración

1. Clonar el repositorio:

   ```sh
   git clone https://github.com/Jkisner24/challengeLogin.git
   cd challenge-login


2. Crear un archivo .env en el mismo directorio que docker-compose.yml con el siguiente contenido:
   ```sh
   SPRING_DATASOURCE_URL=jdbc:mysql://db:3306/db_challenge?allowPublicKeyRetrieval=true
   SPRING_DATASOURCE_USERNAME=root
   SPRING_DATASOURCE_PASSWORD=
   MYSQL_ROOT_PASSWORD=
   MYSQL_DATABASE=db_challenge
   MYSQL_ALLOW_EMPTY_PASSWORD=yes

3. Construir y ejecutar los contenedores Docker:
   ```sh
   docker-compose up -d
   
4. Rutas disponibles - Backend
   ```sh
   /auth/signup 
   /auth/login
   *ambos metodos son de tipo post*

5. Rutas disponibles - Frontend 
   ```sh
   src/main/resources/static/index.html -> Abrir Html con el navegador y se despliega el html.
   src/main/resources/static/sigup.html
   src/main/resources/static/login.html
   src/main/resources/static/home.html





