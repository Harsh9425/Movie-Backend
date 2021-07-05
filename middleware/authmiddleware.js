const jwt = require('jsonwebtoken');
const client = require('../configurations/db');

exports.checkToken = (req, res, next) => {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(500).json({
                error:"Internal server error"
            });
        }

        else {
            const email = decoded.email;
            req.body.email = email;
            next();
        }

    })

}
