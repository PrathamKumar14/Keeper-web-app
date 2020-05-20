import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <div>
        <h1>{props.title}</h1>
        <hr />
        <br />
        <p>{props.content}</p>
        <button onClick={handleClick}>
          <img
            src="https://img.icons8.com/nolan/32/delete-forever.png"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Note;
