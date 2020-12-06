module.exports = (sequelize, DataTypes) => {
    var Test = sequelize.define('Test', {
        column: DataTypes.STRING
    });

    return Test;
};
