import { NoteRepository } from "../repositories/note-repository";

export class FindNotesUseCase {


  constructor(private noteRepository: NoteRepository) {
  }

  async findAll() {
    const notes = await this.noteRepository.findAll()

    return notes
  }
}
