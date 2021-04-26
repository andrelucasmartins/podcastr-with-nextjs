const path = require('path')
module.exports ={
  images: {
    domains: ['storage.googleapis.com']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}