// Imports
import { GraphQLInt, GraphQLString, GraphQLList } from 'graphql'

// App Imports
import CrateType from './types'
import { getAll, getById } from './resolvers'

// Crates All
export const crates = {
  type: new GraphQLList(CrateType),
  args: {
    orderBy: { type: GraphQLString }
  },
  resolve: getAll
}

// Crate By ID
export const crateById = {
  type: CrateType,
  args: {
    crateId: { type: GraphQLInt }
  },
  resolve: getById
}
console.log(`Step: ${process.env.STEP}, File: ${__filename}`)
process.env.STEP++
