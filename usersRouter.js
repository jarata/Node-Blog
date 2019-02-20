const express = require('express');
const Users = require('./data/helpers/userDb');

const router = express.Router();


//function get() {
//     return db('users');
// }

router.get('/', async (req, res) => {
    try {
        const users = await Users.get();
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "The users information could not be retrieved."
        })
    }
});

// function getById(id) {
//     return db('users')
//         .where({ id })
//         .first();
// }

router.get('/:id', async (req, res) => {
    try {
        const user = await Users.getById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({
                message: "The user with the specified ID does not exist."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "The user information could not be retrieved.",
        });
    }
});

// router.get('/:id', async (req, res) => {
//
// })

// function getUserPosts(userId) {
//     return db('posts as p')
//         .join('users as u', 'u.id', 'p.user_id')
//         .select('p.id', 'p.text', 'u.name as postedBy')
//         .where('p.user_id', userId);
// }

// function insert(user) {
//     return db('users')
//         .insert(user)
//         .then(ids => {
//             return getById(ids[0]);
//         });
// }

// function update(id, changes) {
//     return db('users')
//         .where({ id })
//         .update(changes);
// }

// function remove(id) {
//     return db('users')
//         .where('id', id)
//         .del();
// }

module.exports = router;