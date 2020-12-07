module.exports = (sequelize, DataTypes) => {

    const BadgeOwner = sequelize.define('BadgeOwner', {
       /* ownerId: {
        	type: DataTypes.INTEGER,
        	allowNull: false
        },
        badgeId: {
        	type: DataTypes.INTEGER,
        	allowNull: false
        }*/

    });
    BadgeOwner.associate = function(models) {
       // BadgeOwner.belongsTo(models.User, {foreignKey: 'ownerId'})
        //BadgeOwner.belongsTo(models.Badge, {foreignKey: 'badgeId'})


    };
    return BadgeOwner;
};