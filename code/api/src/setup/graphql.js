// Imports
// This is necessary to give access to the express graphql tools
import graphqlHTTP from 'express-graphql'

// App Imports
import serverConfig from '../config/server.json'
import authentication from './authentication'
import schema from './schema'

// Setup GraphQL
export default function (server) {
  console.info('SETUP - GraphQL...')
  // This tells the server to use the authentication code when the request
  // requires a user to be logged in. The user is identified by the token sent
  // in the auth header.
  server.use(authentication)

  // API (GraphQL on route `/`)
  // This tells the server to use graphqlHTTP for requests on the graphql route
  server.use(serverConfig.graphql.endpoint, graphqlHTTP(request => ({
    // This imports the schema, which determines how the request will be handled
    schema,
    // This key is neccessary to enable the graphiql IDE
    graphiql: serverConfig.graphql.ide,
    pretty: serverConfig.graphql.pretty,
    context: {
      // This sets up the auth object that is used in certain mutations and
      // queries.
      auth: {
        user: request.user,
        isAuthenticated: request.user && request.user.id > 0
      }
    }
  })))
}
