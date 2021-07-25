const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    deleteThought,
    removeReaction
} = require('../../controllers/thought-controller')

// GET all and POST api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought)

// GET thought by ID, UPDATE(PUT) thought, and DELETE thought api/thoughts/:id
    router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)


router
    .route('/:thoughtId/reactions')
    .post(addReaction)

router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;