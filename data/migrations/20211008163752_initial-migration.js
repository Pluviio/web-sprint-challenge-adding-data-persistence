
exports.up = async function(knex) {
  await knex.schema
  .createTable('projects', table => {

      table.increments("project_id")

      table.string('project_name').notNullable()

      table.string('project_description')

      table.string('project_completed').default(false)
  })

  .createTable('resources', table => {

    table.increments('resource_id')

    table.string('resource_name').notNullable().unique()

    table.string('resource_description')
  })

  .createTable('tasks', table => {
    
    table.increments("task_id")

    table.string('task_description').notNullable()

    table.string('task_notes')

    table.string('task_completed').default(false)

    table.integer('project_id')

    .unsigned()

    .notNullable()

    .references('project_id')

    .inTable('projects')

    .onDelete('RESTRICT')

    .onUpdate('RESTRICT')
  })

};

exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
  

};
