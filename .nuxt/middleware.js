const middleware = {}

middleware['authentication'] = require('../middleware/authentication.js')
middleware['authentication'] = middleware['authentication'].default || middleware['authentication']

middleware['isAdmin'] = require('../middleware/isAdmin.js')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['noAuthentication'] = require('../middleware/noAuthentication.js')
middleware['noAuthentication'] = middleware['noAuthentication'].default || middleware['noAuthentication']

export default middleware
