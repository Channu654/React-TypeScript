import './App.css';
import { Note } from './component/Note';
import { Notes } from './component/Data';
import Addnote from './component/Add-note/Addnote';
import { useState } from 'react';
import { noteType } from './component/notes-type';

function App() {
  const [notes, setNotes] = useState(Notes);

  const addnotes = (note: noteType) => {
    setNotes([note, ...notes]);
  };

  const handleDelete = (id: any) => {
    const newList = notes.filter((item) => item.id != id);

    setNotes(newList);
  };
  return (
    <div className='App'>
      <h1>NoteApp</h1>
      <Addnote addnotes={addnotes} />
      {notes.map((note) => (
        <Note
          priority={note.priority}
          text={note.text}
          key={note.id}
          // handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
