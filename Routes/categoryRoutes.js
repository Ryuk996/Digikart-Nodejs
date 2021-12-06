const router = require('express').Router()
const categoryCtrl = require('../Controllers/categoryModule')
const auth = require('../Authentication/authenticate')
const authAdmin = require('../Authentication/adminAuth')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(auth, authAdmin, categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(auth, authAdmin, categoryCtrl.deleteCategory)
    .put(auth, authAdmin, categoryCtrl.updateCategory)


module.exports = router