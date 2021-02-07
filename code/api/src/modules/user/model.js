'use strict'

// User
// defines user model
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })
  // defines relationship hasmany for subscriptions
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }
  // returns user object
  return User
}
