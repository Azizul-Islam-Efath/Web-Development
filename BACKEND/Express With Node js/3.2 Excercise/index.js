import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("<h1>This is the home Page</h1>");
});

app.get("/about",(req,res) => {
    res.send("<h1>About Me</h1>");
});

//Allows Server to get contact ---- .get("/extension")
app.get("/contact",(req,res) => {
    res.send("<h1>Contact With Me.</h1>");
});

//Initialising Server-
app.listen(port,() => 
{
    console.log('Server running on Port : '+port+'.');
})   
