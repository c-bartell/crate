// this indicates code is in strict mode, meaning that no undeclared variables can be used. This is done to rid JS code of bad syntax, where it was once accepted, now throws an error - also prevents mistyping a variable from creating a new global variable
'use strict'

// User
// this block will not only create a new function, but will export it as well (as a module) to make it available elsewhere in the app once imported. It defines attributes of a user (name, email, etc) and their data types.
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
  // this describes the relationship users have to subscriptions
  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }
  // this will explicitly return the user
  return User
}

// to alter: I think we will need to add style to the user which will be a string type (or text, not entirely sure the difference)