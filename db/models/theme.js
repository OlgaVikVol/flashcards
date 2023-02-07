const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Question, Statistic }) {
      this.hasMany(
        Question,
        { foreignKey: 'themeId' },
        { onDelete: 'cascade' },
        { hooks: true },
      );
      this.hasMany(
        Statistic,
        { foreignKey: 'themeId' },
        { onDelete: 'cascade' },
        { hooks: true },
      );
    }
  }
  Theme.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Theme',
    },
  );
  return Theme;
};
