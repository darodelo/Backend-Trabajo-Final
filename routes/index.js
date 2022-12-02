const express = require("express")
const router = express.Router()
const { createProduct, getProduct, getProductList, editProduct, deleteProduct } = require("../controllers/indexController")
const { idValidator } = require("../middlewares/idValidator")
const { check } = require("express-validator")
const { axiosRequest } = require("../controllers/axiosController")


// GET

router.get('/getproduct/:id', idValidator, getProduct)

router.get('/getlist/', getProductList)


// POST

router.post('/createproduct', [
    check("img").not().isEmpty().withMessage("Image field is required"),
    check("alt").not().isEmpty().withMessage("Alt field is required"),
    check("productName").not().isEmpty().withMessage("Product Name field is required"),
    check("description").not().isEmpty().withMessage("Description field is required"),
    check("price").not().isEmpty().withMessage("Price field is required"),
    check("productType").not().isEmpty().withMessage("Product Type field is required"),
    check("productSubType").not().isEmpty().withMessage("Product Sub Type field is required"),
    check("category").not().isEmpty().withMessage("Category field is required"),
] , createProduct)


// PUT

router.put('/editproduct/:id', idValidator, [
    check("img").not().isEmpty().withMessage("Image field is required"),
    check("alt").not().isEmpty().withMessage("Alt field is required"),
    check("productName").not().isEmpty().withMessage("Product Name field is required"),
    check("description").not().isEmpty().withMessage("Description field is required"),
    check("price").not().isEmpty().withMessage("Price field is required"),
    check("productType").not().isEmpty().withMessage("Product Type field is required"),
    check("productSubType").not().isEmpty().withMessage("Product Sub Type field is required"),
    check("category").not().isEmpty().withMessage("Category field is required"),
], editProduct)


// DELETE

router.delete('/deleteproduct/:id', idValidator, deleteProduct)


// AXIOS

router.get('/axios', axiosRequest)


module.exports = router