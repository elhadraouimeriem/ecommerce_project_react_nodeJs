const category=require("../models.Category");
async function getAllCategories(req,res)
{
    try{
const categories=await category.find();
res.status(200).json(categories);
    }catch{
res.status(500).send
    }
}