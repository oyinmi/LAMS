/* jshint esversion: 6 */

const express = require('express');

const router = express.Router();

//Users Route
const user = require('./user')
router.use(user);

//Admin Route
const admin = require('./admin')
router.use(admin);

//Book Route
const book = require('./book');
router.use(book);


module.exports = router;
