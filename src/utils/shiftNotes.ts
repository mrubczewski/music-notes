export const shiftNotes = (
    notesArray: string[],
    numOfPositions: number
): string[] => {
    const newNotesArray = [...notesArray]
    for (let i = 0; i < numOfPositions; i++) {
        const noteToShift = newNotesArray.shift()
        if (noteToShift) newNotesArray.push(noteToShift)
    }

    return newNotesArray
}
