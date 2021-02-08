'use strict'

// User
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
    // We will add a column to the users table for Style (default null, then string)
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
