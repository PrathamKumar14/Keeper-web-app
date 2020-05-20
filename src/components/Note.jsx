import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1 className="note-title">{props.title}</h1>
      <p className="note-content">{props.content}</p>
      <button className="note-btn " onClick={handleClick}>
        DELETE
      </button>
    </div>
  );
}

export default Note;