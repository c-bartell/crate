// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
// Creates the graphql schema object
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
