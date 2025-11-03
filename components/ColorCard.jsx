import { ColorForm } from "./ColorForm";

export function ColorCard({  }) {
  return (
    <div
      className="color-card"
      style={{
        background: ,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
    </div>
  );
}
