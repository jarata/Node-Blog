const express = require('express');
const Posts = require('./data/helpers/postDb')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const posts = await Posts.get(req.query);
        res.status(200).json(posts)
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "The posts information could not be retrieved."
        })
    }
});

module.exports = router;

//unction get() {
//   return db('posts');
// }
//
// function getById(id) {
//   return db('posts')
//     .where({ id })
//     .first();
// }
//
// function insert(post) {
//   return db('posts')
//     .insert(post)
//     .then(ids => {
//       return getById(ids[0]);
//     });
// }
//
// function update(id, changes) {
//   return db('posts')
//     .where({ id })
//     .update(changes);
// }
//
// function remove(id) {
//   return db('posts')
//     .where('id', id)
//     .del();
// }