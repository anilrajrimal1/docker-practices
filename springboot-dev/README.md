
# Demo Task Tracker Spring Boot Application with Docker

This project is a simple task tracker web application built with Spring Boot and MongoDB, containerized using Docker.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## Project Structure

- **`docker-compose.yml`**: Defines the services for the application (MongoDB and Spring Boot app).
- **`Dockerfile`**: Multi-stage Dockerfile to build and run the Spring Boot application.
- **`src`**: Contains the source code of the Spring Boot application.
- **`pom.xml`**: Maven configuration file for managing dependencies and building the app.

---

## Getting Started

### 1. Clone the Repository:

```bash
git clone git@github.com:anilrajrimal1/docker-practices.git
cd docker-practices
cd springboot-dev
```

---

### 2. Set Up and Run the Services:

Use `docker-compose` to build and run the application along with MongoDB:

```bash
docker-compose up -d --build
```

**Explanation of Services:**
- **MongoDB**:
  - Image: `mongo:latest`
  - Ports: Exposes MongoDB on port `27018` (mapped to container's `27017`).
  - Volumes: Persists MongoDB data in `./mongodb_data`.
  
- **App**:
  - Builds the Spring Boot application using the `Dockerfile`.
  - Depends on MongoDB service.
  - Exposes the application on port `8080`.
  - Logs are stored in the `./app_logs` directory.

---

### 3. Access the Application:

- Open your browser and navigate to [http://localhost:8080](http://localhost:8080).
- The app connects to MongoDB on the default URI: `mongodb://mongodb:27017/contactlist`.

---

## Development Workflow

### To Stop the Application:

```bash
docker-compose down
```

### To Rebuild and Restart:

```bash
docker-compose up --build
```

---

## Notes

- Make sure port `8080` is free before starting the app.
- MongoDB data is persisted in the `./mongodb_data` folder.
- Application logs are saved in `./app_logs`.

---

## License

This project is licensed under the MIT License.