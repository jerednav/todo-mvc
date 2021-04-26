//

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) 
//made a request on the main route, we are gonna talk to the homeController
//the .getIndex method will render the view EJS to HTML which will respond back to the browser

module.exports = router
