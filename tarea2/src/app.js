const express = require("express");
const dotenv = require("dotenv");
const newsRoute = require("./modules/news/news.routes");
const path = require("path");


dotenv.config();
const port = process.env.PORT || 3000;
const app = express();
app.use(function(req, res, next) {
  //default-src 'self';
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  // child-src 'self' https://www.google.com/;object-src 'self';">
  res.setHeader("Content-Security-Policy", "child-src 'self' https://www.google.com/;object-src 'self';"); 
  return next();
});

app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/", newsRoute);

//add headers Content-Security-Policy and X-Content-Security-Policy



const { engine } = require("express-handlebars");
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

app.set("views", "./src/views");

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
