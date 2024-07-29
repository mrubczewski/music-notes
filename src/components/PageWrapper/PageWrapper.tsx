import styles from './PageWrapper.module.css'
import { PropsWithChildren } from 'react'

export default function PageWrapper({ children }: PropsWithChildren) {
    return <div className={styles.wrapper}>{children}</div>
}
