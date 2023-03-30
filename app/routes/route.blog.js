const express = require('express');
const router = express.Router();
const blogController = require('../controller/controller.blog');

router.get('/blog', blogController.index);
router.get('/blog/create', blogController.create);
router.post('/blog', blogController.store);
router.get('/blog/delete/:id', blogController.delete);

module.exports = router;