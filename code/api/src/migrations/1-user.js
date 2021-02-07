// this module is being exported so that it can be accessed by other files upon importing
module.exports = {
  // the up part of this migration is what defines the changes being made to the database. In this case, we are creating a table for users with attributes listed (id, name, email, etc)
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.TEXT
      },
      password: {
        type: Sequelize.TEXT
      },
      role: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  // for every up migration, there must be an equal/opposite down migration written to allow rollback of changes if needed. This one will drop the users table from the database if needed
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
}

// to alter: We need to update this migration with a style summary for a user. This will be generated once they have completed the style survey