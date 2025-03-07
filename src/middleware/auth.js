const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader === "Bearer ZEWAIL") {
        next();
    } else {
        res.status(403).json({ message: "Forbidden: Invalid Authorization header" });
    }
};

module.exports = authMiddleware;
