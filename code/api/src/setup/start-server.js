// App Imports
import { PORT, NODE_ENV } from '../config/env'

// Start server
// This starts the app server in the given environment on the specified port
export default function (server) {
  console.info('SETUP - Starting server..')

  server.listen(PORT, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      console.info(`INFO - Server started on http://localhost:${ PORT } [${ NODE_ENV }]`)
    }
  })
}
