const express = require('express');
const controller = require('./controller');
const router = express.Router();

// meal routes
router.get('/', controller.get);
router.get('/meals', controller.getMeals);
module.exports = router;