
exports.up = async function(knex) {
 // project migration   
  await knex.schema.createTable('projects', tbl => {
      tbl.increments('project_id');
      tbl.text('project_name', 128).notNullable();
      tbl.text('project_description');
      tbl.boolean('project_completed').default(0);
  });

  await knex.schema.createTable('resources', tbl => {
    tbl.increments('resource_id');
    tbl.text('resource_name', 128).unique().notNullable();
    tbl.text('resource_description');
});

await knex.schema.createTable('tasks', tbl => {
    tbl.increments('task_id');
    tbl.text('task_description', 128).notNullable();
    tbl.text('task_notes');
    tbl.boolean('task_completed').default(0);
    tbl.integer('project_id').notNullable().references('project_id').inTable('projects')
});

};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects');
  await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
};
