import "./Color.css";
import { DeleteButton } from "../../../components/DeleteButton";
import { EditButton } from "../../../components/EditButton";

export default function Color({ color, deleteColor }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      <DeleteButton
        deleteCallback={() => {
          deleteColor(color.id);
        }}
      />

      <EditButton />
    </div>
  );
}
