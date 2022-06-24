const regCtrl = require('../controllers/regCtrl')
const regAuthCtrl = require('../controllers/regAuthCtrl')
const express = require('express')
const router = express.Router()

router.post('/register', regAuthCtrl.regUsr)
router.get('/getAll', regCtrl.getAll)
router.get('/login', regCtrl.verifyUser)

module.exports = router;