import { FindNotesUseCase } from "./find-notes"

describe('', () => {
  test('Should ', async () => {
    const sut = new FindNotesUseCase()

    const expected = [
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

    const received = (await sut.findAll()).map(note => {
      note.id = ''
      return note
    })
    expect(expected).toEqual(received)
  })
})
