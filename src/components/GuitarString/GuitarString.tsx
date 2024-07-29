import styles from './GuitarString.module.css'
import { range } from '@/utils/range'
import GuitarStringFret from '@/components/GuitarStringFret/GuitarStringFret'
import { NOTES_SHARP } from '@/consts/Notes'
import { shiftNotes } from '@/utils/shiftNotes'

interface Props {
    startNote: string
    numberOfFrets: number
}

export default function GuitarString({ startNote, numberOfFrets }: Props) {
    const startNotesIndex = NOTES_SHARP.findIndex(
        (value) => value === startNote
    )
    const stringNotes = shiftNotes(NOTES_SHARP, startNotesIndex)

    return (
        <div className={styles.stringWrapper}>
            {range(0, numberOfFrets).map((index) => {
                const noteIndex = index % stringNotes.length

                return (
                    <div key={index} className={styles.fretWrapper}>
                        <GuitarStringFret
                            value={stringNotes[noteIndex]}
                        ></GuitarStringFret>
                    </div>
                )
            })}
        </div>
    )
}
