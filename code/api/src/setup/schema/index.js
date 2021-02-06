// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  //schema is made up of query and mutation request structures
  query,
  mutation
})

export default schema
