
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./jerome-react-modal.cjs.production.min.js')
} else {
  module.exports = require('./jerome-react-modal.cjs.development.js')
}
