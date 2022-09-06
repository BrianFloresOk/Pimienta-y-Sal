const express = require('express')
const router = express()
const indexController = require('../controllers/indexController')

router.get('/', indexController.index)
router.get('/detalle/:id', indexController.getOne)


module.exports = router