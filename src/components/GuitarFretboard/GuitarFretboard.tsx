'use client'

import GuitarString from '@/components/GuitarString/GuitarString'
import styles from './GuitarFretboard.module.css'
import { range } from '@/utils/range'

interface Props {
    tuning: string[]
    numberOfFrets: number
}

export default function GuitarFretboard({ tuning, numberOfFrets }: Props) {
    return (
        <div className={styles.fretboardWrapper}>
            <div className={styles.guitarStringsWrapper}>
                {tuning.map((note) => (
                    <GuitarString
                        key={note}
                        numberOfFrets={numberOfFrets}
                        startNote={note}
                    ></GuitarString>
                ))}
            </div>
            <div className={styles.fretIndicator}>
                {range(0, numberOfFrets).map((fretIndex) => (
                    <div key={fretIndex} className={styles.indicator}>
                        {fretIndex === 0 || fretIndex === 5 || fretIndex === 12
                            ? fretIndex
                            : ' '}
                    </div>
                ))}
            </div>
        </div>
    )
}
