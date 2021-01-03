import React from 'react';
import { toggleImportanceOf } from '../reducers/noteReducer';
import { connect } from 'react-redux';


const Note = ({ note, handleClick }) => {
  return (
    <li onClick={handleClick}>
      {note.content} <strong>{note.important ? 'important' : ''}</strong>
    </li>
  );
};


const Notes = (props) => {


  const toggleImportance = async (note) => {
    props.toggleImportanceOf(note);
  };


  return(
    <ul>
      {props.notes.map(note =>
        <Note
          key={note.id}
          note={note}
          handleClick={() => toggleImportance(note)}
        />
      )}
    </ul>
  );
};


const mapStateToProps = (state) => {
  if(state.filter === 'ALL')
    return {
      notes : state.notes
    };
  else if (state.filter === 'IMPORTANT')
    return {
      notes : state.notes.filter(note => note.important)
    };
  else
    return {
      notes : state.notes.filter(note => !note.important)
    };
};


const mapDispatchToProps = { toggleImportanceOf };

const connectedNotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
export default connectedNotes;