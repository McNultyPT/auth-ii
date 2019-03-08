const jwt = require('jsonwebtoken');
const secrets = require('../secret/secrets.js');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json("'I solemnly swear that I am up to no good.' You provided invalid credentials.");
            } else {
                req.decodedJwt = decodedToken;
                console.log('decoded token', req.decodedJwt);
                next();
            }
        });
    } else {
        res.status(401).json("'I solemnly swear that I am up to no good.' You provided invalid credentials.")
    }
};