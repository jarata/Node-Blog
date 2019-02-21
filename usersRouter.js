const express = require('express');
const Users = require('./data/helpers/userDb');

const router = express.Router();

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

// function getUserPosts(userId) {
//     return db('posts as p')
//         .join('users as u', 'u.id', 'p.user_id')
//         .select('p.id', 'p.text', 'u.name as postedBy')
//         .where('p.user_id', userId);
// }

router.post('/', async (req, res) => {
    const user = await Users.insert(req.body);
    try {
        res.status(201).json({
            message: 'User created', user
        })
    } catch (error) {
        res.status(500).json({
            error: 'Error creating user'
        })
    }
});

// function update(id, changes) {
//     return db('users')
//         .where({ id })
//         .update(changes);
// }

router.delete('/:id', async (req, res) => {
    try {
        const count = await Users.remove(req.params.id, req.params.name);
        if (count > 0) {
            res.status(200).json({
                message: 'User has been deleted'
            })
        } else {
            res.status(404).json({
                message: "The user with the specified ID does not exist."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "The user could not be removed"
        })
    }
});

module.exports = router;