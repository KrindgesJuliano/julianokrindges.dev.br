import React, { ReactElement } from "react";

interface Props {}

export default function About({}: Props): ReactElement {
  return (
    <section className={"container mx-auto h-auto lg:h-screen py-24 lg:px-40 px-8"} id="about">
      <h2 className={"font-mono text-2xl mb-10 font-bold"}>
        <span className={"text-tint"}>\</span> Sobre
      </h2>
      <div className={"md:flex w-full gap-8"}>
        <article className=" text-xl text-gray">
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
          <h3>Algumas tecnologia que tenho trabalhado recentemente:</h3>
          <ul className={"grid grid-cols-2 grid-rows-3 gap-2 font-mono text-white text-sm pl-3"}>
            <li>JavaScript ( ES6+ )</li>
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>WordPress</li>
            <li>React & React Native</li>
          </ul>
        </article>
        <div className="mt-10 md:mt-0">
          <div className={"w-64 h-72 rounded-lg bg-tint "}></div>
        </div>
      </div>
    </section>
  );
}
