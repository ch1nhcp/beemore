const express = require('express');
const router = express.Router();
const categoryController = require('./category-controller');


router.get('/', categoryController.getALlCategory )

module.exports = router;