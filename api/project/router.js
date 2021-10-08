// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model.js')

router.get('/', async (req, res) => {
    try {
        const projects = await Projects.getAll()
        projects.forEach( p => {
            Projects.booleanCheck(p)
        })
        res.status(200).json(projects)
    } catch (err) {
        res.status(500).json({
            message: "No projects could be retrieved"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const project = await Projects.create(req.body)
        res.status(200).json(project)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})

module.exports = router