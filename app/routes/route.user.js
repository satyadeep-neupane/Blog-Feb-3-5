const router = require('express').Router();
const userController = require('../controller/controller.user');

router.get('/user', userController.index);
router.get('/user/create', userController.create);
router.post('/user', userController.store);
router.get('/user/delete/:id', userController.delete);

module.exports = router;