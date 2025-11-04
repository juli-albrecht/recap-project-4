import { useState } from "react";

export function ColorForm({ onSubmitColor }) {
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
          name="role"
        />
        <label>Hex</label>
        <ColorInput placeholder="#123456" name="hex" />
        <label>Contrast Text</label>
        <ColorInput placeholder="#ffffff" name="contrastText" />
        <button>ADD COLOR</button>
      </form>
    </>
  );
}

export function ColorInput({ placeholder, name }) {
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
        value={inputColor}
        onChange={handleColorInput}
      />
      <input type="color" value={inputColor} onChange={handleColorInput} />
    </div>
  );
}
