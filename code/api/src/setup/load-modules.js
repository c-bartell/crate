 // Imports
import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

// App Imports
// Importing the NODE_ENV variable tells the server how to behave when running in different environments.
import { NODE_ENV } from '../config/env'

// Load express modules
export default function (server) {
  console.info('SETUP - Loading modules...')

  // Enable CORS
  // Tells the server to use Cross-Origin Resource Sharing
  server.use(cors())

  // Request body parser
  // Like JSON.parse, this adds tools to the server to convert the raw json in a
  // request body to an object.
  server.use(bodyParser.json())
  server.use(bodyParser.urlencoded({ extended: false }))

  // Request body cookie parser
  // If I'm understanding the docs correctly, cookieParser allows the api to
  // interpret any cookies passed in with a request. This is odd because, on the
  // front end, the user token is taken out of the cookie and passed as an auth
  // header, rather than passing the whole cookie in API requests. As far as I
  // can tell, this is never used.
  server.use(cookieParser())

  // Static files folder
  server.use(express.static(path.join(__dirname, '..', '..', 'public')))

  // HTTP logger
  if(NODE_ENV === 'development') {
    server.use(morgan('tiny'))
  }
}
