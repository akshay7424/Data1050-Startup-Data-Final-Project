//module.exports = mongoose.model("User", UserSchema);
module.exports = (sequelize, DataTypes) => {
  const Startup = sequelize.define("Startup", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category_list: DataTypes.STRING,
    state_code: {
      type: DataTypes.STRING,
    },
    // Task: Update below:\
    city: DataTypes.STRING,
    funding_rounds: DataTypes.INTEGER,
    funding_total: DataTypes.INTEGER,
    num_investors: DataTypes.INTEGER,
    founded_at: DataTypes.INTEGER,
  });

  return Startup;
};
