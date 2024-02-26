const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const userController= require('../controllers/user')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });

router.get('/contactus',userController.addContact );

  router.post('/success', userController.postContact);

module.exports = router;
