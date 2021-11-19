import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  link: string;
}

const Button = ({ children, link }: Props) => {
  return (
    <Link href={`${link}`} passHref>
      {children}
    </Link>
  );
};

export default Button;
