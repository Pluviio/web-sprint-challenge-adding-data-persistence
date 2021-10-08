// build your `Project` model here
const db = require('../../data/dbConfig')


const booleanCheck = (task) => {
    task.task_completed = task.task_completed == 1 ? true : false
}

const getAll = () => {
    return db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .select('tasks.task_id', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_completed', 'projects.project_description', 'projects.project_name')


}

const getById = async (id) => {
    return db('tasks')
    .where('id', id)
    .first()
}

async function create (task){
    const [id] = await db('tasks')
    .insert(task)
    return getById(id)
}

module.exports = {
    getAll,
    getById,
    create,
    booleanCheck
}