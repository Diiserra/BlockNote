const express = require('express')
const router = express.Router()
const task = require('../controller/taskController')

router.get('/', task.started)
router.get('/tasks', task.read)
router.get('/task/:id', task.findById)
router.post('/task', task.create)
router.put('/update/:id', task.uptade)
router.delete('/delete/:id', task.delete)

module.exports = router
