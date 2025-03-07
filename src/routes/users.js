const express = require("express");
const router = express.Router();
const data = require("../data/store");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);

router.get("/", (req, res) => {
    res.json(data.users);
});


router.post("/", (req, res) => {
    const { name } = req.body;
    const newUser = { id: data.users.length + 1, name };
    data.users.push(newUser);
    res.status(201).json(newUser);
});


router.put("/:id", (req, res) => {
    const user = data.users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    Object.assign(user, req.body);
    res.json(user);
});


router.delete("/:id", (req, res) => {
    data.users = data.users.filter(u => u.id != req.params.id);
    res.status(204).send();
});

module.exports = router;