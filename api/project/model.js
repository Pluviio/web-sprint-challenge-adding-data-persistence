// build your `Project` model here
const db = require('../../data/dbConfig')

const booleanCheck = (project) => {
    project.project_completed = project.project_completed == 1 ? true : false
}

const getAll = () => {
    return db('projects')
    .select('project_id', 'project_name', 'project_description', 'project_completed')
}

const getById = async (id) => {
    return db('projects')
    .where('id', id)
    .first()
}

async function create (project){
    const [id] = await db('projects')
    .insert(project)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    create,
    booleanCheck
}