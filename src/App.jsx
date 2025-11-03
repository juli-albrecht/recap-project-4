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
  return (
    <>
      <h1>Theme Creator</h1>

      <ColorForm onSubmitColor={onSubmitColor} />

      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
