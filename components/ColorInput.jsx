import { useState } from "react";

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