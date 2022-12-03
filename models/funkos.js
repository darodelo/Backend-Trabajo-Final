const mongoose = require("mongoose")

/* EXAMPLE PRODUCT 

    {
      "img": "https://cdn.shopify.com/s/files/1/1052/2158/products/59282_POP_Jumbo-_The_Batman-_POP_1_GLAM-WEB.png",
      "alt":"Front image of 10 inch Batman - The Batman pop jumbo",
      "productName": "10 inch BATMAN - THE BATMAN",
      "description":"Únete a The Caped Crusader™, Batman, en sus primeros años de lucha contra el crimen en Gotham City. ¡Este Jumbo Pop! Batman™ está listo para ejecutar la venganza. ¡Celebre a uno de los superhéroes más reconocibles de DC Comics agregando el imponente Pop! Batman a tu colección DC de The Batman. La figura de vinilo mide aproximadamente 10,75 pulgadas de alto.",
      "price": "40.00",
      "productType":"POP!",
      "productSubType": "JUMBO",
      "category": "DC Comics"
    }

*/ 

const Schema = mongoose.Schema
const productSchema = new Schema ({
    img: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productType: {
        type: String,
        required: true
    },
    productSubType: {
        type: String,
    },
    category: {
        type: String,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema)
module.exports = { Product }