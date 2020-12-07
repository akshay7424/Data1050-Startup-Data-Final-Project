module.exports = (sequelize, DataTypes) => {

    const PollResponse = sequelize.define('PollResponse', {
        ownerId: { // requires allowNull false constraint
        	type: DataTypes.INTEGER, 
        	allowNull: false
        },
        optionId: { // requires allowNull false constraint
        	type: DataTypes.INTEGER,
        	allowNull: false
        }
    });
    PollResponse.associate = function(models) {
        PollResponse.belongsTo(models.User, {foreignKey: 'ownerId'})
        PollResponse.belongsTo(models.PollOption, {foreignKey: 'optionId'})

    };
    return PollResponse;
};