import { useState } from "react";

export function ColorForm() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    onSubmitColor(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Role</label>
        <input
          type="text"
          className="input-text"
          placeholder="some color"
          id="role"
          name="role"
        />
        <label>Hex</label>
        <ColorInput placeholder="#123456" />
        <label>Contrast Text</label>
        <ColorInput placeholder="#ffffff" />
        <button>ADD COLOR</button>
      </form>
    </>
  );
}

function ColorInput({ placeholder, id, name }) {
  const [inputColor, setInputColor] = useState();

  function handleColorInput(event) {
    setInputColor(event.target.value);
  }

  return (
    <div className="input-and-color-picker">
      <input
        type="text, color"
        placeholder={placeholder}
        name={name}
        id={id}
        value={inputColor}
        onChange={handleColorInput}
      />
      <input type="color" value={inputColor} onChange={handleColorInput} />
    </div>
  );
}
