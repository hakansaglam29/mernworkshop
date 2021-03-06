const { check } = require('express-validator');

exports.categoryValidation = [
    check('categoryName', 'Please enter a name minimum 2 maximum 20 chars').isLength({ min: 2, max: 20 }),
    check('description', 'Please enter a name minimum 2 maximum 20 chars').isLength({ max: 200 }),
]