// This is the runner file for the API
// This is where the server is set up and all relevant code is added in.

// Imports
import express from 'express'

// App Imports
// This imports all of the code necessary to configure the server object
import setupLoadModules from './setup/load-modules'
// This imports the code to set up the graphql route in the server
import setupGraphQL from './setup/graphql'
// This imports the code to set up the upload route in the server
import setupUpload from './setup/upload'
// This imports the code to start the server
import setupStartServer from './setup/start-server'

// Create express server
// This creates the server object that contains the actual app
const server = express()

// Setup load modules
// This method sets up the server to use the methods defined in the modules
setupLoadModules(server)

// Setup uploads
// This sets up the upload route on the server
setupUpload(server)

// Setup GraphQL
// This sets up the graphql route on the server
setupGraphQL(server)

// Start server
// This starts the server
setupStartServer(server)
