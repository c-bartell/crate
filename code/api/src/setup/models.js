// Imports - import sequelize module to be able to seed
import Sequelize from 'sequelize'

// App Imports - imports database to be able to connect to
import databaseConnection from './database'
// sets each model to a constant to be able to group and run them together
const models = {
  User: databaseConnection.import('../modules/user/model'),
  Product: databaseConnection.import('../modules/product/model'),
  Crate: databaseConnection.import('../modules/crate/model'),
  Subscription: databaseConnection.import('../modules/subscription/model')
}
// Unsure what is going on here
Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models)
  }
})
// connecting the models to the database
models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models

// to alter: add images model to const models, which will also allow images to be seeded