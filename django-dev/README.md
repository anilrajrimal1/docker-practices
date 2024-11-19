
# Demo Kanban-Board Django with Docker

This project is a simple Dajngo Kanban Backend application set up to run in a Docker container using a `Dockerfile` used in `docker-compose.yml`for development purposes.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Docker](https://docs.docker.com/engine/install/)
- [Docker-Compose](https://docs.docker.com/desktop/setup/install/linux/ubuntu/)
---

## Project Structure

- **`Dockerfile`**: Docker configuration file for setting up a development environment.
- **`docker-compose.yml`**: Compose configuration file for setting up db and django services.
- **`requirements.txt`**: Contains project requirements.
- **`.env`**: Contains project environments.
- **kanban**: Source code for the django application.

---

## Getting Started

### 1. Clone the repository:

```bash
git clone git@github.com:anilrajrimal1/docker-practices.git
cd docker-practices
cd django-dev
```
---

### 2. Run the Container Services:

Run the container services using compose file:

```bash
docker compose up -d --build
```

**Explanation:**
- **web**: This is our web container, mounted on port 8000.
- **db**: Postgres continer having configs as in `.env` file

---

### 3. Access the Application:

There is not that UI kind of thing in this app. Because this app contains api. you can view `/api/docs/` on `localhost:8000/api/docs/`

---


## Cleaning Up

To stop the containers:

```bash
docker compose down #make sure you are in project dir
```
---

## Notes

- Ensure ports `8000` & `5432` are free on your local machine before starting the container.

- This setup is for **development only**.

---

## License

This project is licensed under the MIT License.