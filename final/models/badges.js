module.exports = (sequelize, DataTypes) => {
    const Badge = sequelize.define('Badge', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Badge.associate = function(models) {
        Badge.belongsToMany(models.User, {through: 'BadgeOwners', foreignKey: 'badgeId'})
    };

    return Badge;
};