<img width="1242" alt="image" src="https://github.com/user-attachments/assets/355fc4a8-38d7-4972-ae07-532610484e1e" />



```markdown
# Task Management Application

This repository contains a Task Management Application built using React for the frontend and Node.js with Express for the backend. The application allows users to create, view, and manage tasks with a seamless user interface. It is deployed on Kubernetes and utilizes Google Cloud services, including Cloud SQL for database management and Artifact Registry for container image storage.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Setup](#setup)
- [Deployment](#deployment)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Helm Charts](#helm-charts)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create, read, and manage tasks.
- User-friendly interface built with React.
- RESTful API built with Node.js and Express.
- Kubernetes deployment with Ingress for routing.
- Configuration management using ConfigMaps and Secrets.

## Technologies Used

- **Frontend:** React, Axios
- **Backend:** Node.js, Express, Sequelize (MySQL)
- **Database:** Google Cloud SQL
- **Containerization:** Docker
- **Orchestration:** Kubernetes
- **Package Management:** Helm

## Architecture

The application follows a microservices architecture with separate services for the frontend and backend. The frontend communicates with the backend API to perform CRUD operations on tasks, while the backend interacts with the Cloud SQL database.

![Architecture Diagram](path/to/architecture-diagram.png)

## Setup

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [Helm](https://helm.sh/docs/intro/install/)
- Access to a Google Cloud account with Cloud SQL and Kubernetes Engine enabled.

### Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

### Build and Run Locally

To build and run the application locally, follow these steps:

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies and run the application:**
   ```bash
   npm install
   npm start
   ```

3. **Navigate to the backend directory:**
   ```bash
   cd ../backend
   ```

4. **Install dependencies and run the server:**
   ```bash
   npm install
   npm start
   ```

## Deployment

The application is deployed on a Kubernetes cluster. Follow these steps to deploy the application:

1. **Create a Kubernetes cluster:**
   ```bash
   gcloud container clusters create your-cluster-name --zone your-zone
   ```

2. **Configure `kubectl`:**
   ```bash
   gcloud container clusters get-credentials your-cluster-name --zone your-zone
   ```

3. **Deploy using Helm:**
   ```bash
   helm install myapp ./myapp --namespace app-namespace
   ```

4. **Check the status of the deployment:**
   ```bash
   helm status myapp --namespace app-namespace
   ```

## Usage

Once deployed, you can access the application via the Ingress endpoint. If you have set up a custom domain, point it to your Ingress IP.

1. Open your browser and navigate to `http://local-app.com` to access the application.
2. Use the interface to manage your tasks.

## Environment Variables

The application requires several environment variables for configuration:

### Backend

- **DB_HOST**: The database host (e.g., Cloud SQL instance IP).
- **DB_NAME**: The name of the database.
- **DB_USER**: The username for database access.
- **DB_PASSWORD**: The password for database access.

### Frontend

- **API_URL**: The URL of the backend API (e.g., `/api`).

## Helm Charts

The Helm charts are located in the `myapp` directory. You can customize the `values.yaml` file to modify configurations such as:

- Number of replicas
- Image versions
- Ingress settings

## Contributing

Contributions are welcome! If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```

### Notes

1. **Customization:** Be sure to replace placeholder text (like `yourusername`, `your-repo-name`, `your-cluster-name`, etc.) with your actual values.
2. **Architecture Diagram:** If you have an architecture diagram, replace the path with the actual path to the image.
3. **Additional Instructions:** Feel free to add any additional setup or usage instructions specific to your application.

