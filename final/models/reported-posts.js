module.exports = (sequelize, DataTypes) => {

    const ReportedPost = sequelize.define('ReportedPost', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        ownerId: DataTypes.INTEGER,
        postId: DataTypes.INTEGER,
        reportType: DataTypes.STRING,
        comment: DataTypes.STRING,
        resolved: DataTypes.INTEGER
    });
    ReportedPost.associate = function(models) {
        ReportedPost.belongsTo(models.Post, {foreignKey: 'postId'})
        ReportedPost.belongsTo(models.User, {foreignKey: 'ownerId'})
    };
    return ReportedPost;
};