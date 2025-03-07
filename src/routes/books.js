const express = require("express");
const router = express.Router();
const data = require("../data/store");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);

router.get("/", (req, res) => res.json(data.books));
router.post("/", (req, res) => {
    const { title, authorId } = req.body;
    const newBook = { id: data.books.length + 1, title, authorId, available: true };
    data.books.push(newBook);
    res.status(201).json(newBook);
});
router.put("/:id", (req, res) => {
    const book = data.books.find(b => b.id == req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    Object.assign(book, req.body);
    res.json(book);
});
router.delete("/:id", (req, res) => {
    data.books = data.books.filter(b => b.id != req.params.id);
    res.status(204).send();
});

module.exports = router;
