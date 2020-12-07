module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("Post", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    postType: DataTypes.STRING,
    studentsOnly: DataTypes.BOOLEAN,
    anonymous: DataTypes.BOOLEAN,
    ownerId: {
      // requires allowNull false constraint
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    draft: DataTypes.BOOLEAN,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    link: DataTypes.STRING,
    pollId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    imageUrl: DataTypes.STRING,
    //hidden: DataTypes.BOOLEAN
  });
  Post.associate = function (models) {
    Post.belongsTo(models.User, { foreignKey: "ownerId" });
    //Post.belongsTo(models.Poll, {foreignKey: 'pollID'})

    Post.belongsToMany(models.User, {
      through: "FollowedPosts",
      foreignKey: "postId",
    });
    Post.belongsToMany(models.Tag, {
      through: "PostTags",
      foreignKey: "postId",
    });

    //Posts.belongsToMany(models.ReportedPosts, {foreignKey: 'post_id', as: 'reported_post'})
    //^ Note: This crashes because we don't have proper 'reported_posts' set up in DB.
  };

  return Post;
};
