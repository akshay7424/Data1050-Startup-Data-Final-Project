/*
var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose')

var UserSchema = new mongoose.Schema({
    username: String,
    name: String,
    password: String,
    id: Number,
    phone: String,
    paid: Boolean,
    target: Object,
    due: String,
    status: String,
    elimPing: Boolean,
    alert: String,
    adminAlert: Boolean,
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose);
*/
// Commented out for passport feature:

//module.exports = mongoose.model("User", UserSchema);
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        settingsDark: {
            type: DataTypes.BOOLEAN,
        },
        // Task: Update below:
        settingsAnonymousDefault: DataTypes.BOOLEAN,
        settingsHideEmail: DataTypes.BOOLEAN,
        settingsHideName: DataTypes.BOOLEAN,
        classYear: DataTypes.INTEGER,
        nickname: DataTypes.STRING,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        bio: DataTypes.STRING,
        concentration: DataTypes.STRING,
        ssoKey: DataTypes.STRING,
        userType: DataTypes.STRING,
        lastChecked: DataTypes.DATE
    });
    User.associate = function (models) {
        //User.hasMany(models.Post, {as: 'posts'})

        //User.belongsToMany(models.Post, {through: 'FollowedPost', foreignKey: 'userId'})
        //User.belongsToMany(models.Tag, {through: 'FollowedTag', foreignKey: 'userId'})

        User.belongsToMany(models.Badge, { through: 'BadgeOwners', foreignKey: 'ownerId' })




    }

    return User;
};