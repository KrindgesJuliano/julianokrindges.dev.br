import React, { ReactElement } from "react";
import Link from "next/link";
import Image from "../Image";

import Logo from "../../public/j-logo.svg";

interface Props {
  title?: string;
  imgSrc?: string;
}

function Header({ title = "Juliano", imgSrc = Logo }: Props): ReactElement {
  return (
    <header className={"absolute w-full"}>
      <div className={"container mx-auto h-16 flex items-center justify-between top-0"}>
        <div className={"flex items-center gap-4"}>
          <Image src={imgSrc} alt="Logo" unoptimized />
          <h2>{title}</h2>
        </div>
        <nav className={"flex gap-5"}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <a href="#">Sobre</a>
          <Link href="/contact">
            <a>Contato</a>
          </Link>
          <button className={"text-xl"}>&#128172;</button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
