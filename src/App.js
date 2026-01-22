import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
    // State for the list of notes and current input [cite: 51]
    const [notes, setNotes] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editingId, setEditingId] = useState(null);

    // Ref for managing form field focus [cite: 52]
    const inputRef = useRef(null);

    // Load notes from localStorage on initial render [cite: 53]
    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem('syntecx-notes'));
        if (savedNotes) setNotes(savedNotes);
        inputRef.current.focus(); // Initial focus [cite: 52]
    }, []);

    // Save notes to localStorage whenever the notes state changes [cite: 53]
    useEffect(() => {
        localStorage.setItem('syntecx-notes', JSON.stringify(notes));
    }, [notes]);

    const handleAddOrUpdate = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        if (editingId) {
            // Edit existing note [cite: 50]
            setNotes(notes.map(note =>
                note.id === editingId ? { ...note, text: inputValue } : note
            ));
            setEditingId(null);
        } else {
            // Add new note [cite: 50]
            const newNote = {
                id: Date.now(),
                text: inputValue,
                date: new Date().toLocaleDateString()
            };
            setNotes([...notes, newNote]);
        }
        setInputValue('');
        inputRef.current.focus(); // Refocus after submit [cite: 52]
    };

    const startEdit = (note) => {
        setEditingId(note.id);
        setInputValue(note.text);
        inputRef.current.focus();
    };

    const deleteNote = (id) => {
        setNotes(notes.filter(note => note.id !== id)); // Delete note [cite: 50]
    };

    return (
        <div className="app-container">
            <header>
                <h1>Syntecxhub Notes</h1>
                <p>One thought at a time. Start here.</p>
            </header>

            <form className="note-form" onSubmit={handleAddOrUpdate}>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Write a note..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">
                    {editingId ? 'Update Note' : 'Add Note'}
                </button>
            </form>

            <div className="notes-grid">
                {notes.length === 0 && <p className="empty-msg">No notes yet. Add one above!</p>}
                {notes.map((note) => (
                    <div key={note.id} className="note-card">
                        <p>{note.text}</p>
                        <small>{note.date}</small>
                        <div className="actions">
                            <button className="edit-btn" onClick={() => startEdit(note)}>Edit</button>
                            <button className="delete-btn" onClick={() => deleteNote(note.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;