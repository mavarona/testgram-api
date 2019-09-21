const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET /posts works!');
});

router.post('/', (req, res) => {
    res.send('POST /posts works!');
});

router.delete('/:id', (req, res) => {
    res.send('DELETE /posts works!');
});

router.put('/:id', (req, res) => {
    res.send('PUT /posts works!');
});

module.exports = router;