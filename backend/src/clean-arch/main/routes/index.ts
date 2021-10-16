import { Router } from 'express'

import { ExpressAdapt } from '../../adapt/express-adapt'
import { NoteRepository } from '../../repositories/note-repository'
import { CreateNoteRouter } from '../../routes/create-note.routes'
import { DeleteNoteRouter } from '../../routes/delete-note.routes'
import { FindAllRouter } from '../../routes/find-all.routes'
import { CreateNoteUseCase } from '../../usecases/create-note'
import { DeleteNoteUseCase } from '../../usecases/delete-note'
import { FindNotesUseCase } from '../../usecases/find-notes'

const routes = Router()

const repository = new NoteRepository()

const fireUseCase = new FindNotesUseCase(repository)
const findRoute = new FindAllRouter(fireUseCase)

const deleteUseCase = new DeleteNoteUseCase(repository)
const deleteRoute = new DeleteNoteRouter(deleteUseCase)

const createUseCase = new CreateNoteUseCase(repository)
const createNote = new CreateNoteRouter(createUseCase)

routes
  .get('/all-notes', ExpressAdapt.adapt(findRoute))
  .post('/create-note', ExpressAdapt.adapt(createNote))
  .delete('/delete-note/:id', ExpressAdapt.adapt(deleteRoute))

export { routes }
