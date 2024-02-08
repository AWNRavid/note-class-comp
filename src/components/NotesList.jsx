/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./NoteList.css";

const NotesList = ({ notes, deleteNote, changeToArchived, changeToNotArchived }) => {
  const groupedNotes = notes.reduce((acc, item) => {
    const key = item.archived ? "archived" : "notArchived";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  console.log(notes.length);

  return (
    <div className="noteList-container">
      <h2>Note List</h2>
      <div className="noteList-not_archieved_notes">
        {notes.length && groupedNotes.notArchived ? (
          groupedNotes.notArchived.map((note) => (
            <div key={note.id} className="noteList-note">
              <p className="noteList-note_title">{note.title}</p>
              <p className="noteList-note_body">{note.body}</p>
              <span className="noteList-note_date">{note.createdAt.slice(0, 10)}</span>
              <div className="noteList-action_button">
                <i
                  className="fa-solid fa-box-archive noteList-archive_button"
                  onClick={() => changeToNotArchived(note.id)}
                ></i>
                <i className="fa-solid fa-trash noteList-delete_button" onClick={() => deleteNote(note.id)}></i>
              </div>
            </div>
          ))
        ) : (
          <p className="noteList-not_notes">No notes</p>
        )}
      </div>

      <h2>Archieved</h2>
      <div className="noteList-archieved_notes">
        {notes.length && groupedNotes.archived ? (
          groupedNotes.archived.map((note) => (
            <div key={note.id} className="noteList-note archieved">
              <p className="noteList-note_title">{note.title}</p>
              <p className="noteList-note_body">{note.body}</p>
              <span className="noteList-note_date">{note.createdAt.slice(0, 10)}</span>
              <div className="noteList-action_button">
                <i
                  className="fa-solid fa-rotate-left noteList-undo_button"
                  onClick={() => changeToArchived(note.id)}
                ></i>
                <i className="fa-solid fa-trash noteList-delete_button" onClick={() => deleteNote(note.id)}></i>
              </div>
            </div>
          ))
        ) : (
          <p className="noteList-not_notes">No archieved notes</p>
        )}
      </div>
    </div>
  );
};

export default NotesList;
