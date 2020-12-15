const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryConroller');
const validation = require("../middleware/validationMiddleware")


router.post(
    '/addCategory',
validation.categoryValidation,
CategoryController.addCategory);


router.get(
    '/getCategory/:id', 
    CategoryController.getCategory);


router.post(
    '/updateCategory',
    validation.categoryValidation,
    CategoryController.updateCategory);

router.get(
    '/deleteCategory/:id', 
    CategoryController.deleteCategory
    );


router.get(
    '/', 
    CategoryController.getCategories
    );


router.get(
    '/destroyCategory/:id', 
    CategoryController.destroyCategory
    );

    
module.exports = router;