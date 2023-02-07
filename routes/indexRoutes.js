const express = require('express');

const route = express.Router();

const render = require('../lib/render');
const Index = require('../views/Index');

const { Avatar } = require('../db/models');

route.get('/', async (req, res) => {
  const avatars = await Avatar.findAll({ raw: true });
  render(Index, { title: 'Ten Questions', avatars }, res);
});

module.exports = route;
