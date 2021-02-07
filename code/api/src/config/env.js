// Imports
// .env is like figaro, in that it reads from a special file where environment
// variables are explicitly defined. However, unlike figaro, this file is
// not .gitignored, since the variables are needed to configure the app.
// Therefore, API keys should not be included in the .env, as they will be
// visible in the repo.
import dotenv from 'dotenv'

// Load .env
// .env is where the different environment variables are explicitly defined
dotenv.config()

// Environment
// This creates the env variable that tells the server if it's in development or
// production
export const NODE_ENV = process.env.NODE_ENV

// Port
// This is necessary to tell the server what port to listen on when looking for
// requests
export const PORT = process.env.PORT || 8000
