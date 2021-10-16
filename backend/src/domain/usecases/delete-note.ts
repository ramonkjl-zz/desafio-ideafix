import { NoteRepository } from "../../infra/repositories/note-repository";

export class DeleteNoteUseCase {


  constructor(private repository: NoteRepository) {
  }

  async delete(noteID: string) {
    if (!noteID)
      throw new Error("Not have noteID");

    const deletedNote = await this.repository.deleteNote(noteID)

    return deletedNote
  }
}
