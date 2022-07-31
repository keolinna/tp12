const router = require("express").Router();

//router
const user = require('./user');
const category = require('./cetegory');
const Subcategory = require("./subcategory");
const product = require("./product");
const price = require("./price");

router.use('/api', user);
router.use('/api/category', category);
router.use('/api/subcategory', Subcategory);
router.use('/api/product', product);
router.use('/api/price',price);

module.exports = router;