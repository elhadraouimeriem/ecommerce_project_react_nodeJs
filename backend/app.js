const http =require ("http");
const url=require("url");
const querystring=require("querystring");
const httpServer =http.createServer((req,res)=>{
const query=querystring.parse(url.parse(req.url).query)
//console.log("request received");
//console.log(req.url);
res.writeHead(200,{"content-type":"text/html"});
res.write("<h1>liste de produits "+query.prix+"    "+query.quantite+"</h1>");
res.end;
});
httpServer.listen(8080,()=>console.log("Server running")); 
//
