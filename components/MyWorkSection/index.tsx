import React, { ReactElement } from "react";
// import { GitHub, ExternalLink } from "react-feather";
// import ReactMarkdown from "react-markdown";

import Image from "../Image";
import styles from "./style.module.css";
import Link from "next/link";
// import { postObj } from "../../ts/app_interfaces";

interface props {
  projects: { projects: Array<projectItem> };
}

interface projectItem {
  id: string;
  name: string;
  description: string;
  cover: { url: string };
  tags: [string];
  content: string;
}

export default function MyWork(props: props): ReactElement {
  const { projects } = props.projects;

  return (
    <section className={"container mx-auto h-auto py-24 lg:px-40 px-8"}>
      <h2 className={"font-mono text-2xl mb-16 font-bold"}>
        <span className={"text-tint"}>\</span> Alguns dos meus trabalhos
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {projects.map((item) => (
          <Link href={`/projetos/${item.id}`} key={item.id} passHref>
            <div
              className={`w-full h-80 bg-light-gray rounded overflow-hidden cursor-pointer relative `}
            >
              <Image
                alt="Imagem de capa do projeto"
                src={`${item.cover.url}`}
                layout="fill"
                className="object-cover"
              />
              <div className={`absolute bottom-0 px-3 pb-2 ${styles.card}`}>
                <h2 className={`text-2xl font-bold `}>{item.name}</h2>
                <div className={`${styles.info}`}>
                  <p className="text-base">{item.description}</p>
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono mr-2">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
