const path = require("path");
const express = require("express");
const routes = require("./controllers");

// Import the connection to Sequelize
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// set up Handlebars.js as your app's template engine of choice
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// turn on connection to db and server
// The "sync" part means that this is Sequelize taking the models and connecting them to associated database tables. If it doesn't find a table, it will create it for you
// {force: false} doesn't have to be included, but if it were set to true, it would drop and re-create all of the database tables on startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
