const express = require('express');
const { getAllProducts } = require('../controllers/productController');
const app = express();
const router = express.Router();

router.route('/products').get(getAllProducts);

module.exports = router;