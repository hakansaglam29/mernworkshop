const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryConroller');


router.post('/addCategory', CategoryController.addCategory);

router.get('/getCategory/:id', CategoryController.getCategory);

router.post('/updateCategory', CategoryController.updateCategory);

router.get('/deleteCategory/:id', CategoryController.deleteCategory);

router.get('/', CategoryController.getCategories);