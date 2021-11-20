import React from "react";
import { useRouter } from "next/router";

interface Props {
  label: string;
  to: string;
}

const Button = ({ label, to }: Props) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      <button className="border-2 border-tint rounded w-52 h-12">
        <span className="p-4 font-mono text-tint">{label}</span>
      </button>
    </a>
  );
};

export default Button;
