module.exports = (sequelize, DataTypes) => {

    const FollowedTag = sequelize.define('FollowedTag', {
       /* userId: DataTypes.INTEGER,
        tagName: DataTypes.STRING*/
    });
    FollowedTag.associate = function(models) {
        //FollowedTag.belongsTo(models.User, {foreignKey: 'userId'})
    	//FollowedTag.belongsTo(models.Tag, {foreignKey: 'tagName'})

    };
    return FollowedTag;
};