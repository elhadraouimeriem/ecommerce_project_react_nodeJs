const Category = require('../models/Category');

async function getAllCategories(req,res)
{
    try{
        const categories=await Category.find();
        res.status(200).json(categories);
    }catch(error){
        res.status(500).send("Erreur dans le serveur")
    }
}

  

async function addCategory(req,res){
    try{
    await Category.create(req.body);
    res.status(201).send("Category bien ajoutée");
    }catch(error){
        res.status(500).send("Erreur dans l'ajout de category");
    }
}
module.exports={getAllCategories,addCategory}
