// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model.js')

router.get('/', async (req, res) => {
    try {
        const resources = await Resources.getAll()
        res.status(200).json(resources)
    } catch (err) {
        res.status(500).json({
            message: "No resources could be retrieved"
        })
    }
})

router.post('/', async (req, res) => {
    try {
        const resource = await Resources.create(req.body)
        res.status(200).json(resource)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: err
        })
    }
})

module.exports = router