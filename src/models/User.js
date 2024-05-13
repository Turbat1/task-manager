// models/User.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  UserID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Username: {
    type: DataTypes.STRING,
    unique: true
  },
  Password: DataTypes.STRING,
  Name: DataTypes.STRING,
  Email: {
    type: DataTypes.STRING,
    unique: true
  },
  RoleID: DataTypes.INTEGER,
  DepartmentID: DataTypes.INTEGER
});

module.exports = User;
