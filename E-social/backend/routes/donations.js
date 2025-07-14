const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Donation = sequelize.define('Donation', {
    amount: DataTypes.FLOAT,
    message: DataTypes.STRING,
});

User.hasMany(Donation);
Donation.belongsTo(User);

module.exports = Donation;
