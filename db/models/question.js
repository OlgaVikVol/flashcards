const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Theme, Answer }) {
      this.belongsTo(Theme, { foreignKey: 'themeId' });
      this.hasOne(Answer, { foreignKey: 'questionId' });
    }
  }
  Question.init(
    {
      question: DataTypes.STRING,
      themeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Question',
    },
  );
  return Question;
};
