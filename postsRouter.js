const express = require('express');
const Posts = require('./data/helpers/postDb')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.get();
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "The posts information could not be retrieved."
        })
    }
});

// function getById(id) {
//   return db('posts')
//     .where({ id })
//     .first();
// }

router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.getById(req.params.id);
        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "The post information could not be retrieved.",
        });
    }
});

// function insert(post) {
//   return db('posts')
//     .insert(post)
//     .then(ids => {
//       return getById(ids[0]);
//     });
// }

// router.post('/', async (req, res) => {
//     const {id} = req.params;
//     const post = req.body;
//     try {
//         const post = await Posts.insert(req.body);
//         if (post.text) {
//             res.status(201).json(post);
//         } else {
//             res.status(400).json({
//                 errorMessage: "Please provide text for the post."
//             })
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             message: "Error while saving the post to the database"
//         })
//     }
// });
router.post('/', async (req, res) => {
    const post = await Posts.insert(req.body);
    const {id} = await Posts.get(req.params);
    try {
        if(id) {
            res.status(200).json(post)
        } else {
            res.status(400).json({
                errorMessage: "Please provide text for the post."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Error creating post'
        })

    }
});

// function update(id, changes) {
//   return db('posts')
//     .where({ id })
//     .update(changes);
// }

// router.put('/:id', async (req, res) => {
//     if (!req.body.text) {
//         res.status(400).json({
//             errorMessage: "Please provide text for the post."
//         })
//     }
//     try {
//         const post = await Posts.update(req.params.id, req.body);
//         if (post) {
//             res.status(200).json(post);
//         } else {
//             res.status(404).json({
//                 message: "The post with the specified ID does not exist."
//             })
//         }
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             error: "The post information could not be modified."
//         })
//     }
// });

// function remove(id) {
//   return db('posts')
//     .where('id', id)
//     .del();
// }

router.delete('/:id', async (req, res) => {
    try {
        const count = await Posts.remove(req.params.id);
        if (count > 0) {
            res.status(200).json({
                message: 'Post has been deleted'
            })
        } else {
            res.status(404).json({
                message: "The post with the specified ID does not exist."
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: "The post could not be removed"
        })
    }
});
module.exports = router;