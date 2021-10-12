import { NoteRequest, NotesDatabase } from './notes-database'

const makeSut = () => {
  const sut = new NotesDatabase()

  return {
    sut
  }
}

describe('NotesDatabase()', () => {
  test('Should return the same information with an id', async () => {
    const { sut } = makeSut()

    const note: NoteRequest = {
      title: 'Any Title',
      text: 'Any text'
    }

    const receivedNote = await sut.create(note)

    const expectedNote = {
      id: '',
      title: 'Any Title',
      text: 'Any text'
    }

    receivedNote.id = ''

    expect(expectedNote).toEqual(receivedNote)
  })

  test('Should return a array of notes', async () => {
    const { sut } = makeSut()

    const expectedNotes = [
      {
        id: '',
        title: 'Ideafix',
        text: 'Empresa de pesquisa e inteligência. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perspiciatis odit consectetur, doloremque impedit laborum repellendus ipsum a beatae tempora, animi rerum quam laudantium quibusdam odio eligendi ratione quo nisi!'
      },
      {
        id: '',
        title: 'Indicafix',
        text: 'Plataforma  de pesquisa que gera indicadores de Comunicação Interna, baseados na opinião dos colaboradores.'
      },
      {
        id: '',
        title: 'Vaga desenvolvedor',
        text: 'Profissional full stack para colaborador. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perspiciatis odit consectetur, doloremque impedit laborum repellendus ipsum a beatae tempora, animi rerum quam laudantium quibusdam odio eligendi ratione quo nisi'
      }
    ]

    const receivedNotes = (await sut.findAll()).map(note => {
      note.id = ''
      return note
    })
    expect(expectedNotes).toEqual(receivedNotes)
  })

  test('Should return a object witch keys error and deletedMany', async () => {
    const { sut } = makeSut()

    const notes = await sut.findAll()

    const received = await sut.deleteOne(notes[0].id)

    const expected = { error: false, deletedMany: 1 }

    expect(expected).toEqual(received)
    expect(notes.length).toBe(2)
  })
})
