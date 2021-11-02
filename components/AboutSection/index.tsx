import React, { ReactElement } from "react";

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <section className={"container mx-auto h-screen py-24 px-40"}>
      <h2 className={"font-mono text-2xl mb-10 font-bold"}>
        <span className={"text-tint"}>\</span> Sobre
      </h2>
      <div className={"grid grid-cols-2 w-full gap-8"}>
        <div className={" text-xl text-gray"}>
          <p>
            Olá, me chamo Juliano, amo criar novas coisas atraves de código, seja para internet ou
            qualquer outra meio. Meu interesse em programação começou em 2015 quando havia terminado
            a graduação em Gestão de T.I e decidi começar outra graduação dessa vez focada em
            Desenvolvimento de Sitemas.
          </p>
          <p>
            Depois de um tempo estudando comecei a trabalhar em uma Softwarehouse e mas recentemente
            tenho atuado como Freelancer, focando em aplicações Web Front-End e Back-End para uma
            variedade de clientes.
          </p>
          <p>Algumas tecnologia que tenho trabalhado recentemente:</p>
          <ul className={"grid grid-cols-2 grid-rows-3 gap-2 font-mono text-white text-sm pl-3"}>
            <li>JavaScript ( ES6+ )</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>WordPress</li>
            <li>React & React Native</li>
          </ul>
        </div>
        <div>
          <div className={"w-64 h-72 rounded-lg bg-tint"}></div>
        </div>
      </div>
    </section>
  );
}
