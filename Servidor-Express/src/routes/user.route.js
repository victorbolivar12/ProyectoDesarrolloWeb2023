import express from 'express'
import { 
    createUserWithPerson,
    getUsers,
    deleteUser,
    getUserById
} from '../controller/user.controller.js'

const router = express.Router()

router.post('/', createUserWithPerson)
router.get('/', getUsers)
router.delete('/:id', deleteUser)
router.get('/:id', getUserById)

export default router