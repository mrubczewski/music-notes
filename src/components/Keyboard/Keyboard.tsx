'use client'

import styles from './Keyboard.module.css'
import { range } from '@/utils/range'
import KeyboardKey from '@/components/KeyboardBlackKey/KeyboardKey'
import { NOTES_SHARP } from '@/consts/Notes'
import { shiftNotes } from '@/utils/shiftNotes'

interface Props {
    startNote: string
    numberOfNotes: number
}

export default function Keyboard({ startNote, numberOfNotes }: Props) {
    const startNotesIndex = NOTES_SHARP.findIndex(
        (value) => value === startNote
    )
    const keyboardNotes = shiftNotes(NOTES_SHARP, startNotesIndex)

    return (
        <div className={styles.keyboardWrapper}>
            {range(0, numberOfNotes).map((noteIndex) => {
                const note = noteIndex % keyboardNotes.length
                const noteString = keyboardNotes[note]
                const isBlack = noteString[noteString.length - 1] === '#'
                return (
                    <div
                        key={noteIndex}
                        className={
                            isBlack
                                ? styles.blackKeyWrapper
                                : styles.whiteKeyWrapper
                        }
                    >
                        <KeyboardKey
                            note={keyboardNotes[note]}
                            isBlackKey={isBlack}
                        ></KeyboardKey>
                    </div>
                )
            })}
        </div>
    )
}
