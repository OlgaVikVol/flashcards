const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Avatar extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Statistic }) {
      this.hasMany(Statistic, { foreignKey: 'avatarId' }, { onDelete: 'cascade' }, { hooks: true });
    }
  }
  Avatar.init({
    name: DataTypes.STRING,
    url: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Avatar',
  });
  return Avatar;
};
