import { ContextNotesProvider } from '../contexts/ContextNotes'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextNotesProvider>
      <Component {...pageProps} />
    </ContextNotesProvider>
  )
}

export default MyApp
