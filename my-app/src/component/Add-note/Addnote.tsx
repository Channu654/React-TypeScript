import React, { useState } from 'react';
import './Addnotes.css';

const Addnote = () => {
  const [text, setText] = useState('');

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form action='' className='addnotes'>
        <input type='text' value={text} onChange={handlechange} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Addnote;
