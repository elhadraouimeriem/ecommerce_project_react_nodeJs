const Product = require("../models/Product");

async function getAllProducts(req, res) {
    try {
        const products = await Product.find().populate("category");
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send("Erreur dans le serveur");
    }
}
async function getProductById(req, res) {
    const idP = req.params.id;
    try {
        const product = await Product.findById(idP);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).send("Erreur dans le serveur");
}
}

async function addProduct(req, res) {
    try {
        console.log(req.body)
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json("Erreur d'ajout");
    }
}

async function deleteProductById(req, res) {
    try {
        const idP = req.params.id;
        await Product.findByIdAndDelete(idP);
        res.status(200).json("Produit supprimé avec succès");
    } catch (error) {
        res.status(500).send("Erreur de suppression");
    }
}

async function updateProduct(req, res) {
    try {
        const idP = req.params.id;
        const product = await Product.findByIdAndUpdate(idP, req.body);
        res.status(200).json("Produit bien modifié");
    } catch (error) {
        res.status(500).send("Erreur de modification");
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    deleteProductById,
    updateProduct
};
