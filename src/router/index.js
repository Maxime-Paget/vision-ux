const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: 'public'
    })
})

module.exports = router;