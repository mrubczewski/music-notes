import { Note } from '@/models/Note'

class Scale {
    public notes: Note[] = []

    public rootNote() {
        return this.notes[0]
    }

    constructor(intervals: number[]) {
        this.generateScale(intervals)
    }

    private generateScale(intervals: number[]) {}
}
