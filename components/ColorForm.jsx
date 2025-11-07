import { ColorInput } from "./ColorInput";

export function ColorForm({ onSubmitColor }) {

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    // console.log(data);
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


