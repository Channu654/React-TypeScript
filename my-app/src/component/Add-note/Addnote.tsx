import React, { useState } from 'react';
import { noteType, Priority } from '../notes-type';
import './Addnotes.css';
import { v4 as uuidv4 } from 'uuid';

type AddNoteProps = {
  addnotes: (note: noteType) => void;
};
type DeleteProps={
  handleDelete: (id: any) => void
}

const Addnote = (props: AddNoteProps) => {
  const [text, setText] = useState('');
  console.log('text:', text)


  const [priority, setPriority] = useState<Priority>('low');

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.addnotes({
      text,
      priority,
      id: uuidv4(),
    });
    setText('');
  };

  // select color
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPriority(e.target.value as Priority);
  };

  // delete
  const handleDelete = (
    id: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    
  };
  return (
    <div>
      <form action='' className='addnotes'>
        <input type='text' value={text} onChange={handlechange} />
        <select onChange={handleSelect} value={priority}>
          <option value='high'>High</option>
          <option value='low'>Low</option>
          <option value='medium'>Medium</option>
        </select>
        <button onClick={handleclick}>Add</button>
      
      </form>
    </div>
  );
};

export default Addnote;
