/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      player: {
        type: Sequelize.STRING,
      },
      themeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
      },
      points: {
        type: Sequelize.INTEGER,
      },
      rigthAnswers: {
        type: Sequelize.INTEGER,
      },
      wrongAnswers: {
        type: Sequelize.INTEGER,
      },
      dateOfGame: {
        type: Sequelize.DATE,
      },
      totalQuestions: {
        type: Sequelize.INTEGER,
      },
      avatarId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Avatars',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Statistics');
  },
};
