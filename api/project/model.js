// build your `Project` model here
const db = require('../../data/dbConfig')

function getAll () {
    // DO YOUR MAGIC
    return db('projects')
}

function insert(action) {
    return db('actions')
      .insert(action)
      .then(([id]) => getAll(id));
  }

module.exports = { getAll, insert}