import React, { ReactElement } from "react";
// import { GitHub, ExternalLink } from "react-feather";
// import ReactMarkdown from "react-markdown";

import Image from "../Image";
import { postObj } from "../../ts/app_interfaces";

interface props {
  projects: postsIndex;
}

interface postsIndex {
  items: Array<postObj>;
}

export default function MyWork(props: props): ReactElement {
  const content = props.projects.items;
  const getContent = content.slice(0, 4);

  return (
    <section className={"container mx-auto h-auto py-24 px-40"}>
      <h2 className={"font-mono text-2xl mb-16 font-bold"}>
        <span className={"text-tint"}>\</span> Alguns dos meus trabalhos
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {getContent.map((item: postObj) => (
          <React.Fragment key={item.key}>
            <div className="w-full h-80 bg-light-gray rounded overflow-hidden cursor-pointer">
              {/* TODO: Better responsible behavior in the image */}
              {item.content[517933991150].value && item.content[517933991150].value.length > 0 ? (
                <Image
                  alt="Imagem de capa do projeto"
                  src={`https://berowra.krindges.deta.app/file/${item.content[517933991150].value[0]}`}
                  layout="responsive"
                  width={400}
                  height={300}
                  loading="eager"
                  className="object-cover"
                />
              ) : (
                "Imagem não encontrada"
              )}
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
