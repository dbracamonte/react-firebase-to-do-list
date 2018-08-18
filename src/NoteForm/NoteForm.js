import React, { Component } from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';

class NoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newNoteContent:  ''
    }
    this.handeUserInput = this.handeUserInput.bind(this)
    this.writeNote = this.writeNote.bind(this)
  }

  handeUserInput(e) {
    this.setState({
      newNoteContent: e.target.value
    })
  }

  writeNote() {
    this.props.addNote(this.state.newNoteContent)
    this.setState({
      newNoteContent: ''
    })
  }

  render(props) {
    return (
      <div className="formWrapper">
        <input className="noteInput"
        placeholder="Escribe una nueva nota"
        value={this.state.newNoteContent}
        onChange={this.handeUserInput}/>
        <button className="noteButton"
        onClick={this.writeNote}>Agregar nota</button>
      </div>
    )
  }
}

export default NoteForm;