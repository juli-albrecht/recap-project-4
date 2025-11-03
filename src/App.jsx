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
      <input type="text" className="input-text" placeholder="some color" />
      <label>Hex</label>
      <ColorInput placeholder="#123456" />
      <label>Contrast Text</label>
      <ColorInput placeholder="#ffffff" />
    </form>
  );
}

function ColorInput({ placeholder }) {
  return (
    <div className="input-and-color-picker">
      <input type="text" placeholder={placeholder} />
      <input type="color" />
    </div>
  );
}

export default App;
