import React, { ReactElement } from "react";
import { GitHub, ExternalLink } from "react-feather";
import ReactMarkdown from "react-markdown";

import Separator from "../Separator";
import Image from "../Image";
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
    <section className={"container mx-auto h-auto py-24 px-40"}>
      <h2 className={"font-mono text-2xl mb-10 font-bold"}>
        <span className={"text-tint"}>\</span> Alguns dos meus trabalhos
      </h2>
      <div>
        {/* TODO: criar criar condicional de renderização para map */}
        {content.map((item: postObj) => (
          <React.Fragment key={item.key}>
            <div className={"flex gap-4 mb-8 mt-20 even:flex-row-reverse even-blog-card"}>
              <div className={"w-1/2 h-auto"}>
                <div className={"h-full w-full bg-light-gray max-h-96 rounded overflow-hidden"}>
                  {item.content[517933991150].value &&
                  item.content[517933991150].value.length > 0 ? (
                    <Image
                      alt="Imagem de capa do projeto"
                      src={`https://berowra.krindges.deta.app/file/${item.content[517933991150].value[0]}`}
                      layout="responsive"
                      width={400}
                      height={300}
                    />
                  ) : (
                    "Imagem não encontrada"
                  )}
                </div>
              </div>
              <div className={"text-right w-1/2"}>
                <h2 className={"font-mono text-2xl font-bold"}>{item.title}</h2>
                <div className={"my-4 text-lg"}>
                  <ReactMarkdown>{item.content[3375452205117].value}</ReactMarkdown>
                </div>
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
      </div>
    </section>
  );
}
