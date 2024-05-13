// models/RolePermission.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres'
});

const RolePermission = sequelize.define('RolePermission', {});

module.exports = RolePermission;
