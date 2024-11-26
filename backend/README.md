# Instabytes Backend

Instabytes is a backend project written in Node.js v22, using MongoDB as the database. Docker Compose is used to set up and run MongoDB.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js v22](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/yourusername/instabytes-backend.git
    cd instabytes-backend
    ```

2. **Install Node.js dependencies:**

    ```sh
    npm install
    ```

## Setting Up MongoDB

1. **Start MongoDB using Docker Compose:**

    Run the following command to start a local MongoDB:

    ```sh
    docker compose up -d
    ```

2. **Verify MongoDB is running:**

    You can check if MongoDB is running by accessing the logs:

    ```sh
    docker logs instabytes-mongo
    ```

## Running the Project

1. **Start the Node.js server:**

    ```sh
    npm run dev
    ```

2. **Access the application:**

    The application should now be running at `http://localhost:3000`.

## Additional Scripts

- **Linting:**

  ```sh
  npm run lint
  ```

- **Testing:**

  ```sh
  npm test
  ```

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.
