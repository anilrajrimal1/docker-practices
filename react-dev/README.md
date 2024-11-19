
# Demo React App with Docker

This project is a simple React application set up to run in a Docker container using a `Dockerfile.dev` for development purposes.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (optional, for local development)

---

## Project Structure

- **`Dockerfile.dev`**: Docker configuration file for setting up a development environment.
- **`package.json`**: Contains project dependencies and scripts.
- **React App Files**: Source code for the React application.

---

## Getting Started

### 1. Clone the repository:

```bash
git clone git@github.com:anilrajrimal1/docker-practices.git
cd docker-practices
cd react-dev
```
---

### 2. Build and Run the Container:

Build the container using the development Dockerfile:

```bash
docker build -t react-app-dev -f Dockerfile.dev .
```

Run the container:

```bash
docker run -it -p 3000:3000 -v $(pwd):/react-app -v /react-app/node_modules react-app-dev
```

**Explanation:**
- `-p 3000:3000`: Maps port 3000 on your local machine to port 3000 in the container.
- `-v $(pwd):/react-app`: Mounts the current directory to the container for live updates.
- `-v /react-app/node_modules`: Ensures `node_modules` are not overwritten by the mounted volume.

---

### 3. Access the Application:

Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

---

## Development Workflow

- Edit your React files locally, and changes will automatically reflect in the container due to the mounted volume.
- Use the terminal to run any `npm` commands, either inside the container or locally (if you have Node.js installed).

---

## Cleaning Up

To stop the container:

```bash
docker ps    # Find the container ID
docker stop <container-id>
```

To remove the container:

```bash
docker rm <container-id>
```

To remove the image:

```bash
docker rmi react-app-dev
```

---

## Notes

- Ensure port 3000 is free on your local machine before starting the container.
- This setup is for **development only**. For production, you should build a production-optimized Docker image.

---

## License

This project is licensed under the MIT License.