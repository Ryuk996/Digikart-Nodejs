const router = require('express').Router()
const paymentCtrl = require('../Controllers/paymentModule')
const auth = require('../Authentication/authenticate')
const authAdmin = require('../Authentication/adminAuth')


router.route('/payment')
    .get(auth, authAdmin, paymentCtrl.getPayments)
    .post(auth, paymentCtrl.createPayment)


module.exports = router