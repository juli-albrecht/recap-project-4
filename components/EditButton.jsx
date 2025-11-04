import { useState } from "react";

export function EditButton() {
  const [isEditmode, setIsEditmode] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
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
              placeholder="some color"
              name="role"
            />

            <label>Hex</label>
            <input placeholder="#123456" name="hex" />

            <label>Contrast Text</label>
            <input placeholder="#ffffff" name="contrastText" />

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
// musste null machen, weil leere Klammern nicht gingen
