import { NoteRequest, NotesDatabase } from "../../database/notes-database";

export class NoteRepository {
  private notesModel: NotesDatabase

  constructor() {
    this.notesModel = new NotesDatabase()
  }

  async add(note: NoteRequest) {
    return await this.notesModel.create(note)
  }

  async findAll() {
    return await this.notesModel.findAll()
  }

  async deleteNote(noteID: string) {
    return await this.notesModel.deleteOne(noteID)
  }
}
