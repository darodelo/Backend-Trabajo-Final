const { Product } = require("../models/funkos")

const idValidator = async (req, res, next) => {
    try {
        const item = await Product.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(500).json({msg: "Invalid ID"})
        }
    } catch (error) {
        res.status(500).json({error})
    }
}

module.exports = { idValidator }