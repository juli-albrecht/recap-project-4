
import { useState } from "react";
import { ColorInput } from "./ColorForm";



export function EditButton({ editCallback, color }) {
  const [isEditmode, setIsEditmode] = useState(false);


  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    editCallback(data);
  }

  function handleCancel() {
    setIsEditmode(false);
  }

  return (
    <>
      {isEditmode ? (
        <>
          <form onSubmit={handleSubmit}>
            <label>Role</label>
            <input
              type="text"
              className="input-text"
              placeholder={color.role}
              name="role"
            />
            <label>Hex</label>
            <ColorInput placeholder={color.hex} name="hex" />
            <label>Contrast Text</label>
            <ColorInput placeholder={color.contrastText} name="contrastText" />
            <button type="submit">UPDATE COLOR</button>
          </form>

          <button
            type="button"
            aria-label="cancel delete button"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </>
      ) : (
        <button onClick={() => setIsEditmode(!isEditmode)}>Edit</button>
      )}
    </>
  );
}
