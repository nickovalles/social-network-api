const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// Setup GET all and POST at api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser);

// Setup GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router  
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend);
    
module.exports = router;