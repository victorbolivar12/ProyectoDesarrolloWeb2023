import express from 'express'
import { 
    updatePeople
} from '../controller/people.controller.js'

const router = express.Router()

router.put('/:id', updatePeople)

export default router