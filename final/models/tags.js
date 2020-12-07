module.exports = (sequelize, DataTypes) => {

    const Tag = sequelize.define('Tag', {
        tagName: {
            type: DataTypes.STRING,
            primaryKey: true
        }, imptTag: { type: DataTypes.BOOLEAN }
    });
    Tag.associate = function (models) {
        //Tag.belongsToMany(models.Post, {through: 'PostTags', foreignKey: 'postId'})
        Tag.belongsToMany(models.User, { through: 'FollowedTag', foreignKey: 'tagName' })
        Tag.belongsToMany(models.Post, { through: 'PostTags', foreignKey: 'tagName' })

    };
    return Tag;
};