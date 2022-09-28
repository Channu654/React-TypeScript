import './note.css';
import { NotePropes } from './notes-type';

// type HandleDelete = {
//   handleDelete: (id: any) => void;
// };

export const Note = (props: NotePropes) => {


  return (
    <div className={`note ${props.priority}`}>
      {props.text}
      <button>Delete</button>
    </div>
  );
};
