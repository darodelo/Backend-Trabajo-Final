
// RUTAS CREAR PRODUCTO (TAREA 3)

const { validationResult } = require("express-validator")
const { Product } = require("../models/funkos")


// RUTAS PRODUCTO

const createProduct = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            const item = new Product(req.body)
            await item.save()
            res.status(201).json({item})
        } else {
            res.status(501).json({err})
        }
    } catch (error) {
        res.status(501).json({error})
    }
}


const getProduct = async (req, res) => {
    const item = await Product.findById(req.params.id)
    res.status(200).json({item})
}

const getProductList = async (req, res) => {
    const items = await Product.find()
    res.status(200).json({items})
}

const editProduct = async (req, res) => {
    try {
        const err = validationResult(req)
        if (err.isEmpty()) {
            await Product.findByIdAndUpdate(req.params.id, req.body)
            res.status(201).json({msg:"Product updated"})
        } else {
            res.status(501).json({err})
        }        
    } catch (error) {
        res.status(501).json({error})
    }
}

const deleteProduct = async (req, res) => {
    const item = await Product.findByIdAndDelete(req.params.id)
    res.status(204).json({ msg:`Item ${item} was deleted` })
}



module.exports = { createProduct, getProduct, getProductList, editProduct, deleteProduct }