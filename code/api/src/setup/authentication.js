// Imports
import jwt from 'jsonwebtoken'
import serverConfig from '../config/server.json'

// Authentication middleware
// This function logs in a user for a single request from the auth token
export default function (request, response, next) {
  let authToken = request.headers.authorization
  debugger;
  if (authToken && authToken !== null) {
    // If there is a valid auth token, use it to add a user object to the request
    try {
      const token = authToken.split(' ')
      request.user = jwt.verify(token[1], serverConfig.secret)
    } catch (e) {
      console.warn('Invalid token detected.')
    }
  } else {
    // Otherwise, the request user is empty
    request.user = {}
  }
  // Move along
  next()
}
