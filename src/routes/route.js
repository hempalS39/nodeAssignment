const express = require('express');
const logger = require('../logger/logger')

const util = require('../util/helper')
 const validator = require('../validator/formatter')
  
 const array = require('../array/arr')

const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    
    // console.log("calling the function")
    logger.logging
    util.printDate()
    util.printMonth()
    util.a()
    validator.trim
    validator.lowercase
    validator.uppercase
    array.result
    array.result1


})
// router.get('/test-me', function (req, res) {
//     res.send('My first ever api!')
    
//     console.log("calling the function")
//    util.a()
// })


module.exports = router;
// adding this comment for no reason