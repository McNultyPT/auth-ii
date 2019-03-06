const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model.js');
const secrets = require('../secret/secrets.js');
const restricted = require('./restricted-middleware.js');

router.get('/', (req, res) => {
    res.send('Testing');
});

router.post('/register', (req, res) => {
    let user = req.body;

    const hash = bcrypt.hashSync(user.password, 12);

    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome to the Ministry of Magic, ${user.username}!`,
                    token
                });
            } else {
                res.status(401).json({ message: "'I solemnly swear that I am up to no good.' You provided invalid credentials." });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.get('/users', restricted, (req, res) => {
    Users.find()
        .then(users => {
            res.json(users);
        })
        .catch(err => {
            res.send(err);
        })
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };
    
    const options = {
        expiresIn: '1d',
    };

    return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = router;

