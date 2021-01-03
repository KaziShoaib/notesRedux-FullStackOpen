import React from 'react';
import { createNote } from '../reducers/noteReducer';
import { connect } from 'react-redux';

const NewNote = (props) => {

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    props.createNote(content);
  };

  return (
    <div>
      <form onSubmit={addNote}>
        <input name='note' />
        <button type='submit'>add</button>
      </form>
    </div>
  );
};


const mapDispatchToProps = { createNote };

const connectedNewNote = connect(
  null,
  mapDispatchToProps
)(NewNote);
export default connectedNewNote;
