const express = require('express')
const router = express.Router()

router.post('/pagesInfo', (req, res) => {
    try {
        res.send(global.pagesInfo);
        console.log(global.pagesInfo);
    } catch (error) {
        res.send("Server Error")
        console.log(error.message)
    }
})

module.exports = router
