console.log(`Step: ${process.env.STEP}, File: ${__filename}`)
process.env.STEP++
// Imports
import { GraphQLSchema } from 'graphql'

// App Imports
import query from './queries'
import mutation from './mutations'

// Schema
const schema = new GraphQLSchema({
  query,
  mutation
})

export default schema
