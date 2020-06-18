if(process.env.NODE_ENV != 'production') {
    require("dotenv").config();
}
/* Packages */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

/* App Configuration */
// Use
app.use(bodyParser.urlencoded( { extended: false } ));
app.use(bodyParser.json());
app.use(express.static("./public"));
// Set
app.set("views", "./views");
app.set("view engine", "pug");

/* Express Routes Definitions */
const indexRouter = require("./routes/index");

/* Express Routes */
app.use("/", indexRouter); // Index Router

/* Start off the server */
app.listen(process.env.PORT, () => console.log(`Listening to PORT: ${process.env.PORT}`))