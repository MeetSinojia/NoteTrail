import react from 'react';

export default function AddNote({ handleAddNote }) {

    const [noteText, setNoteText] = react.useState('');
    const characterLimit = 200;

    // Update noteText state and enforce character limit
    const handleChange = (event) => {
        if (noteText.length < event.target.value.length && characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
        else if (noteText.length > event.target.value.length) {
            setNoteText(event.target.value);
        }
        // console.log(noteText < event.target.value.length)
    }

    // Save the note when the Save button is clicked
    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }
    }

    return (
        <div className="new note">
            <textarea
                className='text-new-node'
                rows='8'
                cols='10'
                placeholder="Type to add a note..."
                onChange={handleChange}
                value={noteText}
            >
            </textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveClick}>Save</button>
            </div>
        </div>
    )
}