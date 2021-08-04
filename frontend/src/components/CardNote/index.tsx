import { useContext } from 'react'

import { ContextNotes } from '../../contexts/ContextNotes'
import styles from './styles.module.css'

type Props = {
    id: string
    title: string
    text: string
}

export const CardNote = ({ id, title, text }: Props) => {
    const { handleOpenModal } = useContext(ContextNotes)

    //Para o a segunda parte do texto só existir se houver mais de 31 caractéres.
    const textPart1 = (text.length > 31) ? text.substr(0, 31) : text
    const textPart2 = (text.length > 31) ? text.substr(31, text.length) : ''

    const showMoreText = (id: string) => {
        const dots = (document.getElementById(`dots${id}`))
        const moreText = (document.getElementById(`more-text${id}`))

        if (dots) { //Tag span de id 'dots?' só exite se o texto tem mais de 31 caractéres.
            if (dots.style.display === 'none') {
                dots.style.display = 'inline'
                moreText.style.display = 'none'
            }
            else {
                dots.style.display = 'none'
                moreText.style.display = 'inline'
            }
        }
    }

    return (
        <div className={styles.card}>
            <button className={styles.buttonCardDel} onClick={() => handleOpenModal(id)}>x</button>
            <div
                className={styles.cardContent}
                onClick={() => showMoreText(id)}
            >
                <div className={styles.cardHeader}>
                    <h3>{title}</h3>
                </div>
                <div className={styles.divider} />

                <div className={styles.cardBody}>
                    <p>
                        {textPart1}
                        {textPart2 && <span id={`dots${id}`} >...</span>}
                        <span id={`more-text${id}`} className={styles.more}>
                            {textPart2}
                        </span>
                    </p>
                </div>
            </div>
        </div >
    )
}