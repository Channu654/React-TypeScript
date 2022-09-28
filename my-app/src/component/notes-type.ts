export type Priority = 'high' | 'low' | 'medium';

export type NotePropes = {
  text: string;
  priority?: Priority;
};

export type noteType = {
  id: string;
  text: string;
  priority: Priority;
};

