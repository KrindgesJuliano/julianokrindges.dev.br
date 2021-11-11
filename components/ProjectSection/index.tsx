import React, { ReactElement } from "react";
import { GitHub, ExternalLink } from "react-feather";
import ReactMarkdown from "react-markdown";

import Image from "../Image";
import { postObj } from "../../ts/app_interfaces";
import styles from "./style.module.css";

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
      <div className="grid">
        {/* TODO: criar criar condicional de renderização para map */}
        {content.map((item: postObj) => (
          <React.Fragment key={item.key}>
            <div className={`gap-4 mt-20 ${styles.project_card}`}>
              <div className={"w-1/2 h-auto mb-10"}>
                <div className={"h-full w-full bg-light-gray max-h-96 rounded overflow-hidden"}>
                  {item.content[517933991150].value &&
                  item.content[517933991150].value.length > 0 ? (
                    <Image
                      alt="Imagem de capa do projeto"
                      src={`https://berowra.krindges.deta.app/file/${item.content[517933991150].value[0]}`}
                      layout="responsive"
                      width={400}
                      height={300}
                      loading="eager"
                    />
                  ) : (
                    "Imagem não encontrada"
                  )}
                </div>
              </div>
              <div className={`w-1/2 ${styles.project_text}`}>
                <h3 className={"font-mono text-2xl font-bold"}>{item.title}</h3>
                <div className={"my-4 text-lg"}>
                  <ReactMarkdown>{item.content[3375452205117].value}</ReactMarkdown>
                </div>
                <div className={`text-sm font-mono text-gray gap-4 ${styles.project_tag}`}>
                  {item.content[7288023256715].value.map((tag: string) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className={`mt-5 gap-7 ${styles.project_tag}`}>
                  <a className="hover:text-tint" href={item.content[1677912610571].value}>
                    <GitHub />
                  </a>
                  <a className="hover:text-tint" href={item.content[1215597856592].value}>
                    <ExternalLink />
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
