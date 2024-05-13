// models/UserPermission.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres'
});

const UserPermission = sequelize.define('UserPermission', {});

module.exports = UserPermission;
