import { Router } from 'express'

import { NoteController } from '../controllers/note.controller'

const noteRoutes = Router()
const noteController = new NoteController()

noteRoutes.get('/all-notes', noteController.getAllNotes)

noteRoutes.post('/create-note', noteController.createNote)

noteRoutes.delete('/delete-note/:id', noteController.deleteOne)

export { noteRoutes }
