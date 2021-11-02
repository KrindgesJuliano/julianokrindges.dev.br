import React, { ReactElement } from "react";
import { GitHub, ExternalLink } from "react-feather";
import ReactMarkdown from "react-markdown";

import Separator from "../Separator";
import { postObj } from "../../ts/app_interfaces";

interface props {
  projects: postsIndex;
}

interface postsIndex {
  items: Array<postObj>;
}

export default function Projects(props: props): ReactElement {
  const content = props.projects.items;

  return (
    <section className={"container mx-auto h-screen py-24 px-40"}>
      <h2 className={"font-mono text-2xl mb-10 font-bold"}>
        <span className={"text-tint"}>\</span> Alguns dos meus trabalhos
      </h2>
      {/* TODO: criar criar condicional de renderização para map */}
      {content.map((item: postObj) => (
        <React.Fragment key={item.key}>
          <div className={"grid grid-cols-2 gap-4 mb-8 mt-20"}>
            <div className={"w-full h-auto"}>
              <div className={"h-full w-full bg-light-gray max-h-96"}></div>
            </div>
            <div className={"text-right"}>
              <h2 className={"font-mono text-2xl font-bold"}>{item.title}</h2>
              <p className={"my-4 text-lg"}>
                <ReactMarkdown>{item.content[3375452205117].value}</ReactMarkdown>
              </p>
              <div className={"text-sm font-mono text-gray gap-4 flex justify-end"}>
                {item.content[7288023256715].value.map((tag: string) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <nav className={"flex justify-end mt-5 gap-7"}>
                <a href={item.content[1677912610571].value}>
                  <GitHub />
                </a>
                <a href={item.content[1215597856592].value}>
                  <ExternalLink />
                </a>
              </nav>
            </div>
          </div>
          <Separator />
        </React.Fragment>
      ))}
    </section>
  );
}
