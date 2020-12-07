module.exports = (sequelize, DataTypes) => {

    const ReportedComment = sequelize.define('ReportedComment', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        ownerId: {
            type: DataTypes.INTEGER,
            // allowNull: true
        },
        reportedCommentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        reportType: DataTypes.STRING,
        comment: DataTypes.STRING,
        resolved: DataTypes.BOOLEAN
    });
    ReportedComment.associate = function(models) {
        ReportedComment.belongsTo(models.Comment, {foreignKey: 'reportedCommentId'})
        ReportedComment.belongsTo(models.User, {foreignKey: 'ownerId'})

    };
    return ReportedComment;
};