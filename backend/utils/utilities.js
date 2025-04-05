const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Extract token after "Bearer "

    if (!token) return res.sendStatus(401); // No token → Unauthorized

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token → Forbidden

        req.user = user; // Attach user data to request
        next(); // Proceed to the route
    });
}

module.exports = { authenticateToken };
