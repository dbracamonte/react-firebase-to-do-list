import React, { Component } from 'react';
import './Note.css';
import PropTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super(props)
    this.noteId = props.noteId
    this.noteContent = props.noteContent

    this.handleRemoveNote = this.handleRemoveNote.bind(this)
  }

  handleRemoveNote(id) {
    this.props.removeNote(id)
  }

  render(props) {
    return(
      <div className='note fade-in'>
      <span className="closeBtn" 
        onClick={() => this.handleRemoveNote(this.noteId)}>
        &times;
      </span>
        <p className='noteContent'>{this.noteContent}</p>
      </div>
    )
  }
}

Note.propTypes = {
  noteId: PropTypes.string,
  noteContent: PropTypes.string
}

export default Note;