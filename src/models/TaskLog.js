// models/TaskLog.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres'
});

const TaskLog = sequelize.define('TaskLog', {
  LogID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  TaskID: DataTypes.INTEGER,
  UserID: DataTypes.INTEGER,
  LogTimestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  LogContent: DataTypes.TEXT
});

module.exports = TaskLog;
