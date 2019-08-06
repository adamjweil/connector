const express = require('express');
const router = express.Router();

 // @route GET api/Profie
 // @desc Test Router
 // @access Public
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
