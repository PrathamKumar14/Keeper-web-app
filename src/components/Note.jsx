import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
      </div>
    </div>
  );
}

export default Note;
