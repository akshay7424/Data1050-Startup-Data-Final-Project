module.exports = (sequelize, DataTypes) => {
    const LikesComment = sequelize.define('LikesComment', {
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        postId: DataTypes.INTEGER,
        commentId: DataTypes.INTEGER,
    });
    LikesComment.associate = function (models) {
        LikesComment.belongsTo(models.Comment, {foreignKey: 'commentId'})
        LikesComment.belongsTo(models.User, {foreignKey: 'ownerId'})
        LikesComment.belongsTo(models.Post, {foreignKey: 'postId'})

        //Likes.belongsTo(models.Users, {through: 'Commented_Users', foreignKey: 'comments_users_id_fk', as: 'commenter'})
        //Likes.belongsToMany(models.Users, {through: 'Followed_Users', foreignKey: 'followed_users_fk_2', as: 'followed'})

    };

    return LikesComment;
};