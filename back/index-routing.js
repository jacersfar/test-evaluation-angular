const express = require('express');
const router = express.Router();

const userController = require('./controllers/user.controller');

router.get('/user/find', userController.find);
router.post('/user/authenticate', userController.authenticate);
router.delete('/user/delete', userController.batchDelete);
router.post('/user/register', userController.register);

module.exports = router;
