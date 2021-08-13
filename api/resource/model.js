// build your `Resource` model here
const Resource = require('../../data/dbConfig.js');

async function getAll() {
    const resources = await Resource('resources');
    return resources;
} 

async function create(resource) {
    const [resource_id] = await Resource('resources').insert(resource);
    return Resource('resources as r').where('r.resource_id', resource_id).first();
}

module.exports = {
    getAll,
    create,
}