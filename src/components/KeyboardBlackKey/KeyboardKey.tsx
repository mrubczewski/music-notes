import styles from './KeyboardKey.module.css'
import React from 'react'

interface Props {
    note: string
    isBlackKey?: boolean
}

export default function KeyboardKey({ note, isBlackKey }: Props) {
    const [isSelected, setIsSelected] = React.useState<boolean>(false)

    function toggleSelection() {
        isSelected ? setIsSelected(false) : setIsSelected(true)
    }

    const style = {
        background: isBlackKey
            ? isSelected
                ? 'grey'
                : 'black'
            : isSelected
              ? 'grey'
              : 'white',
    }

    return (
        <button onClick={toggleSelection} className={styles.key} style={style}>
            {note}
        </button>
    )
}
