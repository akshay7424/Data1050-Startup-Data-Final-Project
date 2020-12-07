module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        anonymous: {
            type: DataTypes.BOOLEAN,
        },
        ownerId: { // requires allowNull false constraint
            type: DataTypes.INTEGER,
            allowNull: false
        },
        postId: { // requires allowNull false constraint
            type: DataTypes.INTEGER,
            allowNull: false
        },
        commentId: {
            type: DataTypes.INTEGER,
        },
        body: {
            type: DataTypes.STRING,
        }

    });
    Comment.associate = function(models) {
        Comment.belongsTo(models.Post, {foreignKey: 'postId'})
        Comment.belongsTo(models.User, {foreignKey: 'ownerId'})

        //Comments.belongsTo(models.Users, {through: 'Commented_Users', foreignKey: 'comments_users_id_fk', as: 'commenter'})
        //Comment.hasMany(models.ReportedComment)
        //***^ This part crashes because we don't have reported_comments set up in DB.

    };

    return Comment;
};
