const Router = require('express')
const router = new Router()
const { readFile, writeFile, stat, unlink } = require('../controller/userController')
// const UserController = require('../controller/userController')
// const authMiddleWare = require('../middleware/authMiddleWare')

router.post('/api/v1/users', writeFile)
router.get('/api/v1/users', readFile)
router.patch('/api/v1/users/:userId', writeFile)
router.delete('/api/v1/users/:userId', writeFile)
router.delete('/api/v1/users', )



module.exports = router