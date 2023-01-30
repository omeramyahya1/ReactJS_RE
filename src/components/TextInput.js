import React, { Component } from "react";
import "./TextInput.css";

const TYPES = ["text", "password", "tel", "email"];
const PATTERNS = [
  "*",
  "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
  "[0-9]{3}-[0-9]{2}-[0-9]{3}",
];

export const TextInput = ({ type, placeholder }) => {
  const checkType = TYPES.includes(type) ? type : TYPES[0];
  const checkPattern =
    type == "email"
      ? PATTERNS[1]
      : type == "password"
      ? PATTERNS[2]
      : PATTERNS[0];

  console.log(checkPattern);
  return (
    <input
      className={`textField`}
      type={checkType}
      placeholder={placeholder}
      pattern={checkPattern}
    />
  );
};
