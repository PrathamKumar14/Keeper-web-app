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
    <div>
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

      <img
        className="pen-img"
        src="https://img.icons8.com/cotton/64/000000/pen.png"
        alt=""
      />
    </div>
  );
}

export default CreateArea;
