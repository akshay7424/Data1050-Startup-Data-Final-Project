module.exports = (sequelize, DataTypes) => {
    const Notification = sequelize.define('Notification', {
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        targetID: DataTypes.INTEGER,
        postID: DataTypes.INTEGER,
        read: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    Notification.associate = function(models) {
        Notification.belongsTo(models.User, {foreignKey: 'targetID'})
    };

    return Notification;
};