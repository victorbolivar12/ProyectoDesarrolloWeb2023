import express from 'express'
import { 
    createUserWithPerson,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} from '../controller/user.controller.js'

const router = express.Router()

router.post('/', createUserWithPerson)
router.get('/', getUsers)
router.delete('/:id', deleteUser)
router.get('/:id', getUserById)
router.put('/:id',updateUser)

export default router