import { Note } from '@/models/Note'

export class Chord {
    notes: Note[] = []

    // TODO Think about how to properly represent this
    quality: string = ''
    extension: string = ''

    public rootNote() {
        return this.notes[0]
    }

    constructor() {}
}
