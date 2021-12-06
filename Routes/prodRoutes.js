const router = require('express').Router()
const productCtrl = require('../Controllers/productModule')
const auth = require('../Authentication/authenticate')
const authAdmin = require('../Authentication/adminAuth')


router.route('/products')
    .get(productCtrl.getProducts)
    .post(auth, authAdmin, productCtrl.createProduct)       //auth, authAdmin,


router.route('/products/:id')
    .delete(auth, authAdmin, productCtrl.deleteProduct)
    .put(auth, authAdmin, productCtrl.updateProduct)



module.exports = router