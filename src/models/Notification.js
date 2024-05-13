// models/Notification.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres'
});

const Notification = sequelize.define('Notification', {
  NotificationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Content: DataTypes.TEXT,
  Type: DataTypes.STRING,
  Timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  UserID: DataTypes.INTEGER
});

module.exports = Notification;
