import React from "react";

interface Props {}

const Button = (props: Props) => {
  return (
    <button className={"border-2 w-52 h-12 rounded border-tint"}>
      <span className={"text-tint font-mono"}>Vamos Conversar</span>
    </button>
  );
};

export default Button;
