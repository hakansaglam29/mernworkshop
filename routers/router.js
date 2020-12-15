const express = require('express');
const router = express.Router();
const CatagoryRouter = require('./CatogoryRouter');
const ProductRouter = require('./ProductRouter');

router.use('./catogories', CatagoryRouter );
router.use('./products', ProductRouter );

module.exports = router;