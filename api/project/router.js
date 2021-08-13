// build your `/api/projects` router here
const express = require('express');
const db = require('./model');

const router = express.Router();

//middleware
function validateProjects (req, res, next) {
    const { project_name } = req.body
    if (!project_name) {
        res.status(400).json({ message: 'body is missing name'})
    } else {
        next()
    }
}

// router.get('/', (req, res, next) => {
//     db.getAll()
//     .then(projects => {
//         res.json(projects)
//     })
//     .catch(next)
// })
router.get("/", async (req, res, next)=>{
    try{
        const project = await db.getAll()
        res.json(project)
        }
        catch(err){next(err)}
})

router.post('/', validateProjects, (req, res, next) => {
    db.insert(req.body)
    .then(post => {
        res.json(post)
    })
    .catch(next)
})



module.exports = router