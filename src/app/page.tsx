import styles from './page.module.css'
import GuitarFretboard from '@/components/GuitarFretboard/GuitarFretboard'
import Keyboard from '@/components/Keyboard/Keyboard'
import PageWrapper from '@/components/PageWrapper/PageWrapper'

export default function Home() {
    return (
        <main className={styles.main}>
            <PageWrapper>
                <GuitarFretboard
                    numberOfFrets={24}
                    tuning={['E', 'A', 'D', 'G', 'B', 'E'].reverse()}
                ></GuitarFretboard>
                <Keyboard startNote={'C'} numberOfNotes={24}></Keyboard>
            </PageWrapper>
        </main>
    )
}
