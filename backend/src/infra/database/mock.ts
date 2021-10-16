import { generateID } from "../../utils/generateID";

export const notesMock = [
  {
    id: generateID(), // Gerar caractéres aleatórios para servir como ID.
    title: 'Ideafix',
    text: `Empresa de pesquisa e inteligência. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perspiciatis odit consectetur, doloremque impedit laborum repellendus ipsum a beatae tempora, animi rerum quam laudantium quibusdam odio eligendi ratione quo nisi!`
  },
  {
    id: generateID(),
    title: 'Indicafix',
    text: 'Plataforma  de pesquisa que gera indicadores de Comunicação Interna, baseados na opinião dos colaboradores.'
  },
  {
    id: generateID(),
    title: 'Vaga desenvolvedor',
    text: 'Profissional full stack para colaborador. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto perspiciatis odit consectetur, doloremque impedit laborum repellendus ipsum a beatae tempora, animi rerum quam laudantium quibusdam odio eligendi ratione quo nisi',
  }
]
