module.exports = (sequelize, DataTypes) => {

    const Poll = sequelize.define('Poll', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        open: DataTypes.BOOLEAN

    });
    Poll.associate = function(models) {
    };
    return Poll;
};