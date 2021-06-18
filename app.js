const express = require("express");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/" , (req,res) => {
    res.render("home");
});

app.get("/aboutus" , (req,res) => {
    res.render("aboutus");
});

app.get("/gallary" , (req,res) => {
    res.render("gallary");
});

app.get("/services" , (req,res) => {
    res.render("services");
});

app.get("/contactus" , (req,res) => {
    res.render("contactus");
});

app.get("/IT" , (req,res) => {
    res.render("I&T");
});

app.get("/cons" , (req,res) => {
    res.render("cons");
});

app.get("/GM" , (req,res) => {
    res.render("gm");
});

app.get("/EI" , (req,res) => {
    res.render("ei");
});

app.listen(process.env.PORT);


const port = process.env.PORT || 3000;
// if (port == null || port == "") {
//   port = 34;
// }

app.listen(port, function() {
  console.log("Server started on port 3000");
});
