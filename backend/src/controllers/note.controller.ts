import { Request, Response } from "express"

import { NotesDatabase } from '../database/notes-database'

const notesModel = new NotesDatabase()

class NoteController {
  constructor() { }

  async getAllNotes(request: Request, response: Response) {
    const notes = await notesModel.findAll()

    return response.json(notes)
  }

  async createNote(request: Request, response: Response) {
    const body = request.body

    const createdNote = await notesModel.create(body)

    return response.json(createdNote)
  }

  async deleteOne(request: Request, response: Response) {
    const id = request.params.id

    const deleted = await notesModel.deleteOne(id)

    return response.json(deleted)
  }
}

export { NoteController }

