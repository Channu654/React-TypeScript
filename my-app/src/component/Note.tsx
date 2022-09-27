import './note.css';
import { NotePropes } from './notes-type';

export const Note = (props: NotePropes) => {
  return <div className={`note ${props.priority}`}>{props.text}</div>;
};
