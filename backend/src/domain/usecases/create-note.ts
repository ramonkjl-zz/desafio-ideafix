import { NoteRepository } from "../../infra/repositories/note-repository"

export class CreateNoteUseCase {

  constructor(private noteRepository: NoteRepository) {
  }

  async create(title: string, text: string) {
    const createdNote = await this.noteRepository.add({ title, text })

    return createdNote
  }
}
