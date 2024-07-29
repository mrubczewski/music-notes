import styles from './GuitarString.module.css'
import { range } from '@/utils/range'
import GuitarStringFret from '@/components/GuitarStringFret/GuitarStringFret'
import { NOTES_SHARP } from '@/consts/Notes'

interface Props {
    startNote: string
    numberOfFrets: number
}

export default function GuitarString({ startNote, numberOfFrets }: Props) {
    const startNotesIndex = NOTES_SHARP.findIndex(
        (value) => value === startNote
    )
    const stringNotes = [...NOTES_SHARP]
    for (let i = 0; i < startNotesIndex; i++) {
        const noteToShift = stringNotes.shift()
        if (noteToShift) stringNotes.push(noteToShift)
    }

    console.log('string', startNote, stringNotes)
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
