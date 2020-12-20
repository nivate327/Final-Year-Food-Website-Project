const express=require("express")
const PORT=process.env.PORT || 3000
const app=express()
const ejs=require("ejs")
const path=require("path")
const expressLayout=require("express-ejs-layouts")

//const staticpath=path.join(__dirname,"../public");
//app.use(express.static(staticpath));

// Handle Routing 
app.get("/", (req, res)=>
{
    res.render("home");
})

// set template engine
app.use(expressLayout)
app.set("views", path.join(__dirname, "/resources/views"))
app.set("view engine", "ejs")

// server running
app.listen(PORT, ()=>
{
    console.log(`server is running on ${PORT}`);
})