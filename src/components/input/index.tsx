import React from "react";

function Input({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
      <input
        type="checkbox"
        style={{ padding: "20px", color: "red", background: "red" }}
      />
    </div>
  );
}

export default Input;
