import styles from './page.module.css'
import GuitarFretboard from '@/components/GuitarFretboard/GuitarFretboard'

export default function Home() {
    return (
        <main className={styles.main}>
            <GuitarFretboard
                numberOfFrets={24}
                tuning={['E', 'A', 'D', 'G', 'B', 'E']}
            ></GuitarFretboard>
        </main>
    )
}
