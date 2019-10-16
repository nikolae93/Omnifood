// Settings

const express =require("express");

const app = express();



// STATIC 
app.use(express.static(__dirname));

// Routes

app.get("/",(req,res)=>{
   res.render("./index.html");
});


// SERVER

app.listen(3000, ()=>{
   console.log("server is up on port 3000");
})
