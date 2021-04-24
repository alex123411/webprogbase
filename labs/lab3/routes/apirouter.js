const router = require('express').Router();
const userRoute = require('./users.js');
const proglanguageRoute = require('./ProgLanguageRoute.js');
const bodyparser = require('body-parser');
const mediaRouter = require('./mediaRouter');
 
const multer = require('multer');
 
router.use(multer({dest:"./data/media"}).single("image"))
 
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));
 
router.use('/data' , mediaRouter)
router.use('/users' , userRoute);
router.use('/proglanguages' , proglanguageRoute);
 
module.exports = router;