const Sequelize = require("sequelize");
const fs = require("fs");
const path = require("path");
const basename = path.basename(__filename);
const db = {};

//Not clear Host: brown-qa.catkywuq5bap.us-east-1.rds.amazonaws.com
//Clear Host: dev-mariadb.catkywuq5bap.us-east-1.rds.amazonaws.com
const sequelize = new Sequelize(
  "mariadb://admin:EOKg9ICKKiC98wyW4Rmx@dev-mariadb.catkywuq5bap.us-east-1.rds.amazonaws.com:3306/bqa"
);
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
