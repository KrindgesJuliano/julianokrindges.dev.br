import React, { ReactElement } from "react";
import Image from "../Image";

import Logo from "../../public/j-logo.svg";

interface Props {
  title?: string;
  imgSrc?: string;
}

function Header({ title = "Juliano", imgSrc = Logo }: Props): ReactElement {
  return (
    <header className={"absolute w-full"}>
      <div className={"container mx-auto h-16 flex items-center justify-between"}>
        <div className={"flex items-center gap-4"}>
          <Image src={imgSrc} alt="Logo" unoptimized />
          <h2>{title}</h2>
        </div>
        <nav className={"flex gap-5"}>
          <a href="#">Home</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
          <button className={"text-xl"}>&#128172;</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
