
const express = require("express");
const cors = require("cors");

const booksRoutes = require("./routes/books");
const authorsRoutes = require("./routes/authors");
const usersRoutes = require("./routes/users");
const transactionsRoutes = require("./routes/transactions");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);
app.use("/users", usersRoutes);
app.use("/transactions", transactionsRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the E-Library API");
});


const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
