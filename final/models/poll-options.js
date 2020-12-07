module.exports = (sequelize, DataTypes) => {

    const PollOption = sequelize.define('PollOption', {
        index: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        fromPollId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        body : {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    PollOption.associate = function(models) {
        PollOption.belongsTo(models.Poll, {foreignKey: 'fromPollId'})
    };
    return PollOption;
};