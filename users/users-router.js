const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Testing');
});

module.exports = router;

