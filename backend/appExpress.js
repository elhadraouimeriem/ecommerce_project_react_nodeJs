//mongodb+srv://meriemelhadraoui:VfAtxDBVFSOlpiEE@cluster0.7fl170r.mongodb.net/db_catalogue?retryWrites=true&w=majority
const express=require("express");//importer express
const appExpress=express();//démarrer express
const cors=require('cors');
const productrouter=require("./routes/products.routes")
//const URL="mongodb+srv://meriemelhadraoui:CLjwkyVBTVswhN91@cluster0.7fl170r.mongodb.net/?retryWrites=true&w=majority";
const mongoose=require("mongoose");
const dotevn=require("dotenv");
dotevn.config()

mongoose.connect(process.env.DB_URL).then(result=>appExpress.listen(process.env.SERVER_PORT,()=>console.log("server running")))
.catch(err=>console.log(err))
appExpress.use(cors());
appExpress.use(express.json());

appExpress.use("/products",productrouter)

