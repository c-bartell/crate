// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import SubscriptionType from './types'
import { create, remove } from './resolvers'

// Subscription create
export const subscriptionCreate = {
  // This defines the structure of the subscriptionCreate mutation, and
  // specifies the resolver to be used
  type: SubscriptionType,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// Subscription remove
export const subscriptionRemove = {
  type: SubscriptionType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
