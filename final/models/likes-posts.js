module.exports = (sequelize, DataTypes) => {
  const LikesPost = sequelize.define("LikesPost", {
    ownerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    postId: DataTypes.INTEGER,
    commentId: DataTypes.INTEGER,
  });
  LikesPost.associate = function (models) {
    LikesPost.belongsTo(models.Post, {
      foreignKey: "postId",
      onDelete: "CASCADE",
    });
    LikesPost.belongsTo(models.User, { foreignKey: "ownerId" });
    LikesPost.belongsTo(models.Comment, { foreignKey: "commentId" });

    //Likes.belongsTo(models.Users, {through: 'Commented_Users', foreignKey: 'comments_users_id_fk', as: 'commenter'})
    //Likes.belongsToMany(models.Users, {through: 'Followed_Users', foreignKey: 'followed_users_fk_2', as: 'followed'})
  };

  return LikesPost;
};
