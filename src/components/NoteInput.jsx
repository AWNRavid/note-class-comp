/* eslint-disable react/prop-types */
import React from "react";
import "./NoteInput.css";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      archived: false,
    };

    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onArchivedChangeEventHandler = this.onArchivedChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, 50),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onArchivedChangeEventHandler(event) {
    this.setState(() => {
      return {
        archived: event.target.checked,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNewNote(this.state);
  }

  render() {
    return (
      <div className="noteInput-container">
        <form action="" onSubmit={this.onSubmitEventHandler} className="noteInput-form">
          <h2>Crate A Note</h2>
          <input
            className="noteInput-title_input"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
            required
          />
          {50 - this.state.title.length !== 0 ? (
            <span className="noteInput-title_character_limit">{50 - this.state.title.length} characters left</span>
          ) : (
            <span className="noteInput-title_character_limit alert">Title too long</span>
          )}
          <textarea
            className="noteInput-input_body"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type here"
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
            required
          ></textarea>
          <div className="noteInput-arhieved">
            <label htmlFor="">Archived?</label>
            <input type="checkbox" value={this.state.archived} onChange={this.onArchivedChangeEventHandler} />
          </div>
          <button className="noteInput-button" type="submit">
            Create
          </button>
        </form>
      </div>
    );
  }
}

export default NoteInput;
