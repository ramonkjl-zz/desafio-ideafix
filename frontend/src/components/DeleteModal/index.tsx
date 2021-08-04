import { useContext } from 'react'

import { ContextNotes } from '../../contexts/ContextNotes'
import styles from './styles.module.css'

export const DeleteModal = () => {
    const { deleteConfirm } = useContext(ContextNotes)

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p>
                    Realmente deseja excluir?
                </p>
                <div className={styles.footer}>
                    <button onClick={() => deleteConfirm(false)}>
                        Não
                    </button>
                    <button onClick={() => deleteConfirm(true)}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}