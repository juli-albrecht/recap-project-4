import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import { ColorForm } from "../components/ColorForm";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", { defaultValue: initialColors });
  

  function onSubmitColor(data) {
    console.log(data);
    const id = uid();
    setColors([{ ...data, id }, ...colors]);
  }

  function deleteColor(colorID) {
    const mutatedColors = colors.filter((color) => color.id !== colorID);
    setColors(mutatedColors);
  }

  function updateColor(id, newColorData) {
    console.log(colors);
    console.log(id, newColorData);
    const newColors = colors.map((color) => {
     return color.id === id ? { ...newColorData, id } : color;
    });
    setColors(newColors);
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
            <Color
              key={color.id}
              color={color}
              deleteColor={deleteColor}
              updateColor={updateColor}
            />
          );
        })
      )}
    </>
  );
}

export default App;
