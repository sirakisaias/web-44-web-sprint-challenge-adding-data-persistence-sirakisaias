// build your `Task` model here
const task = require('../../data/dbConfig.js');


//middleware 
const taskmiddlware = (num) => {
    if (num == 0) {
        return false;
    } else {
        return true;
    }
};

async function getAll() {

    const tasks = await task.select('t.*', 'p.project_description', 'p.project_name')
    .from('projects as p')
    .join('tasks as t', 'p.project_id', 't.project_id')

    //transforming to boolean
    const change = tasks.map( (task) => {
        task.task_completed = taskmiddlware(task.task_completed);
    }); 

    return tasks;
}
module.exports = { getAll}