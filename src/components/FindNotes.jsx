/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./FindNotes.css";

class FindNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foundNotes: [],
      title: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  searchNote() {
    const findNotes = this.props.notes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.title);
    });
    console.log(findNotes);
    this.setState(() => {
      return {
        foundNotes: findNotes,
      };
    });
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  render() {
    return (
      <div className="findNotes-container">
        <div className="findNotes-search_container">
          <input
            className="findNotes-search_input"
            type="text"
            placeholder="What notes do you want to search?"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <i className="fa-solid fa-magnifying-glass findNotes-search_button" onClick={this.searchNote}></i>
        </div>
        <div className="findNotes-search_result_container">
          {this.state.foundNotes.map((note) => {
            return (
              <div key={note.id} className="findNotes-note">
                <h2 className="findNotes-note-title">{note.title}</h2>
                <p className="findNotes-note-body">{note.body}</p>
                <p className="findNotes-note-date">{note.createdAt.slice(0, 10)}</p>
              </div>
            );
          })}
          
        </div>
      </div>
    );
  }
}

export default FindNotes;
