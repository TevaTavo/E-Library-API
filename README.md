# E-Library API

This is a simple E-Library API built with Node.js and Express. It provides endpoints to manage books, authors, users, and transactions.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/E-Library-API.git
    ```

2. Navigate to the project directory:
    ```sh
    cd E-Library-API
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the server:
    ```sh
    node src/app.js
    ```

2. The server will start on port 2000 by default. You can access the API at `http://localhost:2000`.

## API Endpoints

### Books

- **GET /books**: Returns a list of all books.
- **POST /books**: Adds a new book. Requires `title` and `authorId` in the request body.
- **PUT /books/:id**: Updates an existing book by ID. Requires the book ID in the URL and the updated fields in the request body.
- **DELETE /books/:id**: Deletes a book by ID.

### Authors

- **GET /authors**: Returns a list of all authors.
- **POST /authors**: Adds a new author. Requires `name` in the request body.
- **PUT /authors/:id**: Updates an existing author by ID. Requires the author ID in the URL and the updated fields in the request body.
- **DELETE /authors/:id**: Deletes an author by ID.

### Users

- **GET /users**: Returns a list of all users.
- **POST /users**: Adds a new user. Requires `name` in the request body.
- **PUT /users/:id**: Updates an existing user by ID. Requires the user ID in the URL and the updated fields in the request body.
- **DELETE /users/:id**: Deletes a user by ID.

### Transactions

- **POST /transactions/borrow**: Borrows a book. Requires `userId` and `bookId` in the request body.
- **POST /transactions/return**: Returns a book. Requires `bookId` in the request body.

## Authentication

The API uses a simple authentication middleware that checks for the `Authorization` header with the value `Bearer ZEWAIL`. If the header is not present or incorrect, it returns a `403 Forbidden` response.

