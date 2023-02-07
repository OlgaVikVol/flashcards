const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, Avatar }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
      this.belongsTo(Avatar, { foreignKey: 'avatarId' });
    }
  }
  Statistic.init(
    {
      player: DataTypes.STRING,
      themeId: DataTypes.INTEGER,
      points: DataTypes.INTEGER,
      rigthAnswers: DataTypes.INTEGER,
      wrongAnswers: DataTypes.INTEGER,
      dateOfGame: DataTypes.DATE,
      totalQuestions: DataTypes.INTEGER,
      avatarId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Statistic',
    },
  );
  return Statistic;
};
