import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { uid } from "uid";
import { useState } from "react";

function App() {
  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm />

      {initialColors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

function ColorForm() {
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

function ColorInput({ placeholder, id }) {
  const [inputColor, setInputColor] = useState();

  function handleColorInput(event) {
    setInputColor(event.target.value);
  }

  return (
    <div className="input-and-color-picker">
      <input
        type="text, color"
        placeholder={placeholder}
        id={id}
        value={inputColor}
        onChange={handleColorInput}
      />
      <input type="color" value={inputColor} onChange={handleColorInput} />
    </div>
  );
}

export default App;
