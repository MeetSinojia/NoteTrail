import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";


export default function Note({ id, text, date, handleDeleteNote, handleEditNote }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);

    // Delete the note when the delete icon is clicked
    const handleDeleteClick = () => {
        handleDeleteNote(id);
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        handleEditNote(id, editedText);
        setIsEditing(false);
    }

    const handleCancel = () => {
        setEditedText(text);
        setIsEditing(false);
    }

    const handleChange = (e) => {
        setEditedText(e.target.value);
    }

    return (
        <div className="note">
            {isEditing ? (
                <textarea
                    className="edit-note"
                    type="text"
                    value={editedText}
                    onChange={handleChange}
                    autoFocus
                    onBlur={handleSave}
                ></textarea>
            ) : (
                <span onClick={handleEdit}>{text}</span>
            )}
            <div className="note-footer">
                <small >{date}</small>
                <MdDeleteForever className="delete-icon" size="1.3em" onClick={handleDeleteClick} />
            </div>
        </div>
    )
}