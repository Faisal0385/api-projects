
const Product = require('../models/product')


const getAllProducts = async (req, res) => {

    // @ des: to get all value
    // const products = await Product.find()

    const { company, name, featured } = req.query
    const queryObject = {}

    if (company) {
        queryObject.company = { $regex: company, $options: "i" }
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    if (featured) {
        queryObject.featured = featured
    }


    const products = await Product.find(queryObject)
    res.status(200).json({ msg: products })
}

// @ des: to get query product
const getSearchProducts = async (req, res) => {
    const products = await Product.find(req.query)
    res.status(200).json({ msg: products })
}


module.exports = getAllProducts