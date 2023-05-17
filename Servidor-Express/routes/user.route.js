import express from 'express'
import { 
    createUserWithPerson,
    getUsers
 } from '../controller/user.controller.js'
const router = express.Router()

router.post('/', createUserWithPerson)

router.get('/', getUsers)


export default router