import { useState } from "react";

export function DeleteButton({ deleteCallback }) {
  const [showConfirm, setShowConfirm] = useState(false);

  function handleDeleteClick() {
    console.log("delete clicked");
    setShowConfirm(true);
  }

  function handleConfirm() {
    console.log("delete confirmed");
    setShowConfirm(false);
    deleteCallback();
  }

  function handleCancel() {
    console.log("cancel delete");
    setShowConfirm(false);
  }

  return (
    <>
      {showConfirm ? (
        <>
          <span className="color-card-hightlight">Really delete?</span>

          <button
            type="button"
            aria-label="confirm delete button"
            onClick={handleConfirm}
          >
            DELETE
          </button>

          <button
            type="button"
            aria-label="cancel delete button"
            onClick={handleCancel}
          >
            CANCEL
          </button>
        </>
      ) : (
        <button
          type="button"
          aria-label="delete color card"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      )}
    </>
  );
}
