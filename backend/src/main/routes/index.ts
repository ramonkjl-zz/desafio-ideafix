import { Router } from 'express'

import { ExpressAdapt } from '../../adapter/express-adapt'
import { CreateNoteUseCase } from '../../domain/usecases/create-note'
import { DeleteNoteUseCase } from '../../domain/usecases/delete-note'
import { FindNotesUseCase } from '../../domain/usecases/find-notes'
import { NoteRepository } from '../../infra/repositories/note-repository'
import { CreateNoteRouter } from '../../presentation/routes/create-note.routes'
import { DeleteNoteRouter } from '../../presentation/routes/delete-note.routes'
import { FindAllRouter } from '../../presentation/routes/find-all.routes'

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
