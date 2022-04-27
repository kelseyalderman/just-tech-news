// Import the Sequelize constructor from the library
const Sequelize = require("sequelize");

// Execute dotenv to make data in the .env file available at process.env.<ENVIRONMENT-VARIABLE-NAME>
require("dotenv").config();

// Create connection to our database
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}

module.exports = sequelize;
