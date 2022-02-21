var express =require("express"); 
var app=express();  

var onAboutUs=function(req, res){
    res.send("Chief : Hrishikesh Pawar");
};
var onDefault=function(req, res){
    res.send("<h1>Contoso  Pvt. Ltd</h1>"+
              "<hr/>"+
              "<ol>"+
                    " <li>Multinational Company</li>"+
                    " <li>Reach across 12 countries all over the world</li>"+
                    " <li>Excellence driven</li>"+
                    " <li>International standards</li>"+
             "</ol>");
};
app.get("/",onDefault);  
app.get("/aboutus",onAboutUs);  
var server=app.listen(8081);
console.log("Server is running on port 8081");
