const express = require("express");
const router = express.Router();
const data = require("../data/store");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);

router.get("/", (req, res) => {
    res.json(data.authors);
});


router.post("/", (req, res) => {
    const { name } = req.body;
    const newAuthor = { id: data.authors.length + 1, name };
    data.authors.push(newAuthor);
    res.status(201).json(newAuthor);
});


router.put("/:id", (req, res) => {
    const author = data.authors.find(a => a.id == req.params.id);
    if (!author) return res.status(404).json({ message: "Author not found" });

    Object.assign(author, req.body);
    res.json(author);
});


router.delete("/:id", (req, res) => {
    data.authors = data.authors.filter(a => a.id != req.params.id);
    res.status(204).send();
});

module.exports = router;