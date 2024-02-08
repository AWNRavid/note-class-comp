import React from "react";
import "./App.css";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import FindNotes from "./components/FindNotes";
import { getInitialData } from "./utils/index";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.addNewNote = this.addNewNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.changeToArchived = this.changeToArchived.bind(this);
    this.changeToNotArchived = this.changeToNotArchived.bind(this);
  }

  addNewNote({ title, body, archived }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived,
            createdAt: new Date().toISOString(),
          },
        ],
      };
    });
  }

  deleteNote(id) {
    const filterNotes = this.state.notes.filter((note) => {
      return note.id !== id;
    });
    console.log(filterNotes);
    this.setState(() => {
      return {
        notes: filterNotes,
      };
    });
  }

  changeToArchived(id) {
    const data = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = false;
      }
      return note;
    });
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  changeToNotArchived(id) {
    const data = this.state.notes.map((note) => {
      if (note.id === id) {
        note.archived = true;
      }
      return note;
    });
    this.setState(() => {
      return {
        notes: data,
      };
    });
  }

  render() {
    return (
      <div className="container">
        <NoteInput addNewNote={this.addNewNote} />
        <FindNotes notes={this.state.notes} />
        <NotesList
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          changeToArchived={this.changeToArchived}
          changeToNotArchived={this.changeToNotArchived}
        />
      </div>
    );
  }
}

export default App;
