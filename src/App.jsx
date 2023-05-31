import react from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NoteList from './components/NoteList';
import Search from './components/search';
import Header from './components/Header';

export default function App() {
  // Initialize state for notes
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'This is my first note!',
      date: '15/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my second note!',
      date: '21/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my third note!',
      date: '28/04/2021',
    },
    {
      id: nanoid(),
      text: 'This is my new note!',
      date: '30/04/2021',
    },
  ]);

  // Function to add a new note
  const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  // Function to edit a note
  const handleEditNote = (id, editedText) => {
    setNotes(prevNotes => {
      const updatedNotes = prevNotes.map(note => {
        if (note.id === id) {
          return { ...note, text: editedText };
        }
        return note;
      });
      return updatedNotes;
    });
  };

  // Function to delete a note
  const handleDeleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id != id);
    setNotes(newNotes);
  }

  // Initialize state for search text
  const [searchText, setsearchText] = react.useState('');

  // Initialize state for dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-app-data'));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  // Save notes to localStorage whenever notes state changes
  useEffect(() => {
    localStorage.setItem('react-app-data', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header setDarkMode={setDarkMode} />
        <Search
          setsearchText={setsearchText}
        />
        <NoteList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      </div>
    </div>
  )
}