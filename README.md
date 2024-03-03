# Blog API

This is a RESTful API for a blogging platform, built with Node.js and Express, and using MySQL for data persistence. The API is containerized with Docker, ensuring a consistent development and deployment environment.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Node.js](https://nodejs.org/en/)

### Installing

To set up the project for development on your local machine, please follow the instructions below:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Build the Docker containers using the following command:

``` bash
docker-compose up --build
```

This command will set up the entire stack, including the Node.js application and the MySQL database.

### Configuration

Before starting the application, make sure to configure the database settings in db.config.js inside the src directory to match your environment.

### Running the application

To start the application, run the following command:

```bash
 npm start
```

For development, you can use:

```bash
 npm run dev
```

This will start the application using nodemon, which will watch for changes and automatically restart the server.

### API Endpoints

The API supports the following endpoints for managing blog posts:

- ***GET /posts***
Retrieves a list of all blog posts.
Returns: An array of posts.
Status Code: 200 OK.

- ***GET /posts/:postId***
Retrieves the details of a blog post by ID.
Returns: An object containing the post details.
Status Code: 200 OK.

- ***POST /posts***
Creates a new blog post.
Returns: An object containing the created post.
Status Code: 200 OK.

- ***PUT /posts/:postId***
Updates an existing blog post by ID.
Returns: An object containing the updated post.
Status Code: 200 OK.

- ***DELETE /posts/:postId***
Deletes a blog post by ID.
Returns: No content.
Status Code: 204 No Content.

### Built With

- Node.js - The runtime server environment
- Express - The web framework used
- MySQL - The database used
- Docker - Containerization platform
