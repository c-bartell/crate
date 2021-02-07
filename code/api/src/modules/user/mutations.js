// Imports
// this line will allow for GraphQL to be used, pulled from built in 'graphql' module. I believe this is specifically using predefined graphql data types
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
// this imports the UserType class, which is a GraphQLObjectType instance. It sets the available fields for a user
import { UserType } from './types'
// this loads in create and remove resolver functions, which are called in the userSignup and userRemove mutations below. These async functions instruct how to create and remove users, with the create also checking a user already exists.
import { create, remove } from './resolvers'

// Create
// This will allow a new user to be created, requires name, email, password
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// Remove
// this will allow a user to be deleted based on user id provided
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}