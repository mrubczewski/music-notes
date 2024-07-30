import { NOTE } from '@/enums/Notes'
import { NOTE_TYPE } from '@/enums/NoteType'

export class Note {
    public note: NOTE
    public type: NOTE_TYPE
    public octave: number

    public flat() {
        console.log('flat')
    }

    public sharp() {
        console.log('sharp')
    }

    public log() {
        let value = this.note.toString()

        switch (this.type) {
            case NOTE_TYPE.Flat: {
                value += 'b'
                break
            }
            case NOTE_TYPE.Sharp: {
                value += '#'
                break
            }
        }

        console.log(value)
    }

    constructor(note: NOTE, type: NOTE_TYPE, octave: number) {
        this.note = note
        this.type = type
        this.octave = octave
    }
}
