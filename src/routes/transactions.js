const express = require("express");
const router = express.Router();
const data = require("../data/store");

router.post("/borrow", (req, res) => {
    const { userId, bookId } = req.body;
    const book = data.books.find(b => b.id == bookId);
    if (!book || !book.available) return res.status(400).json({ message: "Book unavailable" });

    book.available = false;
    data.transactions.push({ userId, bookId, type: "borrow", date: new Date() });
    res.json({ message: "Book borrowed successfully" });
});

router.post("/return", (req, res) => {
    const { bookId } = req.body;
    const book = data.books.find(b => b.id == bookId);
    if (!book || book.available) return res.status(400).json({ message: "Book is already returned" });

    book.available = true;
    data.transactions.push({ bookId, type: "return", date: new Date() });
    res.json({ message: "Book returned successfully" });
});

module.exports = router;