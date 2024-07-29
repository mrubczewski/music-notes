interface Props {
    note: string
    isBlackKey?: boolean
}

export default function KeyboardKey({ note, isBlackKey }: Props) {
    const style = {
        background: isBlackKey ? 'black' : 'white',
        width: '100%',
        height: '100%',
        border: '1px solid grey',
    }

    return <div style={style}>{note}</div>
}
