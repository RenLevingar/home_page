import React, { useState, useEffect } from 'react';

const NoteTaker = () => {
  const [note, setNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([]);

  // gets notes from local storage
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setSavedNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Saves notes to local storage whenever their is a change
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(savedNotes));
  }, [savedNotes]);

  //  Handles any changes made to the notes
  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  // Function that ruyns when a note is saved
  const handleSaveNote = () => {
    if (note.trim() !== '') {
      setSavedNotes([...savedNotes, note]);
      setNote('');
    }
  };

  // Function that runs when a note is deleted
  const handleDeleteNote = (index) => {
    const updatedNotes = [...savedNotes];
    updatedNotes.splice(index, 1);
    setSavedNotes(updatedNotes);
  };

  return (
    <section id="notepad" className='notesSection'>
      <h1 className='notesTitle'>Notes</h1>
      <textarea
        rows="4"
        cols="50"
        className='notesText'
        value={note}
        onChange={handleNoteChange}
        placeholder="Type your note here..."
      />
      <br />
      <button className="notesButton" onClick={handleSaveNote}>Save Note</button>
      <ul>
        {savedNotes.map((savedNote, index) => (
          <li className="notesItem" key={index}>
            {savedNote}
            <button className="notesDelete" onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NoteTaker;
