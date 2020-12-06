module.exports = (sequelize, DataTypes) => {
    const PostTags = sequelize.define('PostTags', {
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        tagName: DataTypes.STRING
    });
    PostTags.associate = function (models) {
        PostTags.belongsTo(models.Post, { foreignKey: 'postId' })
        //Posts hasMany post_tags, add that to Posts ?? 
        // ^ Yes that makes sense
    };

    return PostTags;
};