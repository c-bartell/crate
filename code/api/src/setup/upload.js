// Imports
import path from 'path'
import multer from 'multer'

// App Imports
import serverConfig from '../config/server.json'

// File upload configurations and route
export default function (server) {
  console.info('SETUP - Upload...')

  // Set destination
  // This defines where uploaded files should be stored to the server
  const storage = multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'public', 'images', 'uploads'),

    filename: function (request, file, callback) {
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  })

  const upload = multer({
    storage: storage
  }).single('file')

  // Upload route
  // This defines the file upload request endpoint.
  server.post(serverConfig.upload.endpoint, (request, response) => {
    upload(request, response, function (error) {
      if (!error) {
        response.json({
          success: true,
          file: request.file.filename
        })
      } else {
        response.json({
          success: false,
          file: null
        })
      }
    })
  })
}
