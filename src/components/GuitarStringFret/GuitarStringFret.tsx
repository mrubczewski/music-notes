import styles from './GuitarStringFret.module.css'
import React from 'react'

interface Props {
    value: string
}

export default function GuitarStringFret({ value }: Props) {
    const [isSelected, setIsSelected] = React.useState<boolean>(false)

    function toggleSelected() {
        isSelected ? setIsSelected(false) : setIsSelected(true)
    }

    const style = {
        background: isSelected ? 'darkslategray' : 'black',
    }

    return (
        <div className={styles.stringFretWrapper}>
            <button
                onClick={toggleSelected}
                className={styles.stringFret}
                style={style}
            >
                {value}
            </button>
        </div>
    )
}
