const route = require('express').Router();

const {
  default: regenerator,
} = require('@babel/preset-env/lib/polyfills/regenerator');
const {
  Theme, Question, Answer, Statistic, Avatar,
} = require('../db/models');

route.post('/start', async (req, res) => {
  try {
    req.app.locals.userName = req.body.userName;
    const themes = await Theme.findAll({ row: true });
    res.json(themes);
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/play', async (req, res) => {
  try {
    const { themeId } = req.body;
    const questions = await Question.findAll({
      where: { themeId },
      raw: true,
    });
    res.json(questions);
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/answer', async (req, res) => {
  try {
    const { questionId } = req.body;
    const answer = await Answer.findOne({
      where: { questionId },
      raw: true,
    });
    res.json(answer);
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/finish', async (req, res) => {
  try {
    const {
      themeId,
      points,
      rigthAnswers,
      wrongAnswers,
      avatarId,
      totalQuestions,
    } = req.body;
    console.log(totalQuestions);
    const statistic = await Statistic.create({
      player: req.app.locals.userName,
      themeId,
      points,
      rigthAnswers,
      wrongAnswers,
      avatarId,
      dateOfGame: new Date(),
      totalQuestions,
    });
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/createtheme', async (req, res) => {
  try {
    const { name, image } = req.body;
    const createtheme = await Theme.create({
      name,
      image,
    });
    res.json(createtheme);
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/createquestions', async (req, res) => {
  try {
    const questions = req.body;
    const createquestions = await Question.bulkCreate(questions);
    res.json(createquestions);
  } catch (error) {
    console.log('error', error);
  }
});

route.post('/createanswers', async (req, res) => {
  try {
    const answers = req.body;
    await Answer.bulkCreate(answers);
    res.sendStatus(200);
  } catch (error) {
    console.log('error', error);
  }
});

//statistic
route.post('/statistic', async (req, res) => {
  try {
    const allStat = await Statistic.findAll({
      include: [{ model: Theme }, { model: Avatar }],
      raw: true,
      nest: true,
    });

    res.json(allStat);
  } catch (error) {
    console.log('error', error);
  }
});

module.exports = route;
