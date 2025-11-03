import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

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
  // const [input, setInput] = useState("");
  return (
    <form>
      <label>Role</label>
      <input type="text" placeholder="some color" />
      <label>Hex</label>
      <input type="text" placeholder="#123456" />
      <label>Contrast Text</label>
      <input type="text" placeholder="#ffffff" />
    </form>
  );
}

export default App;
