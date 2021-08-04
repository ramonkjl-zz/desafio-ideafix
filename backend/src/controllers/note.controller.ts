import { Request, Response } from "express"

import { NotesDatabase } from '../database/NotesDatabase'

const notesDatabase = new NotesDatabase()

class NoteController {
    constructor() { }

    getAllNotes(request: Request, response: Response) {
        const allNotes = notesDatabase.findAll()

        return response.json(allNotes)
    }

    createNote(request: Request, response: Response) {
        const body = request.body

        const createdNote = notesDatabase.create(body)

        return response.json(createdNote)
    }

    deleteOne(request: Request, response: Response) {
        const id = request.params.id

        const deleted = notesDatabase.deleteOne(id)

        return response.json(deleted)
    }
}

export { NoteController }

