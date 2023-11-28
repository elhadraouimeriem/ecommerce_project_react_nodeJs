const mongoose=require("mongoose");
const categorySchema=new mongoose.Schema({
    name:String,
});
const category=mongoose.model("Category",productSchema);
module.exports=category;