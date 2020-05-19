import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => {
      return { ...prevNote, [name]: value };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="div">
      <img
        className="note-img"
        src="https://img.icons8.com/clouds/350/000000/notes-app.png"
        alt=""
      />
      <form>
        <input
          autoComplete="off"
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <br />
        <textarea
          autoComplete="off"
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <br />
        <button onClick={handleClick}>ADD</button>
      </form>

      <h3 className="intro">
        "<span className="keep">[KEEP]</span> notes of everything you learned is
        the best practice to remember it for long time."
        <br />
        `This is Keep app help you out in that way`
        <br />
        <a href="https://twitter.com/pratham85086605">
          <img
            src="https://img.icons8.com/fluent/48/000000/twitter.png"
            alt=""
          />
        </a>
      </h3>
    </div>
  );
}

export default CreateArea;
