import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { ColorForm } from "../components/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);

  function onSubmitColor(data) {
    console.log(data);
    const id = uid();
    setColors([{ ...data, id }, ...colors]);
  }

  function deleteColor(colorID) {
    const mutatedColors = colors.filter((color) => color.id !== colorID);
    setColors(mutatedColors);
  }

  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={onSubmitColor} />

      {colors.length === 0 ? (
        <p>No colors... start by adding one!</p>
      ) : (
        colors.map((color) => {
          return (
            <Color key={color.id} color={color} deleteColor={deleteColor} />
          );
        })
      )}
    </>
  );
}

export default App;
