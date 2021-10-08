// build your `/api/projects` router here
const router = require('express').Router()
const Tasks = require('./model.js')

router.get('/', async (req, res) => {
    try {
        const tasks = await Tasks.getAll()
        tasks.forEach( p => {
            Tasks.booleanCheck(p)
        })
        res.status(200).json(tasks)
    } catch (err) {
        res.status(500).json({
            message: "No tasks could be retrieved"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const task = await Tasks.create(req.body)
        Tasks.booleanCheck(task)
        res.status(200).json(task)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})

module.exports = router