import { GraphQLClient } from "graphql-request";

import About from "../components/AboutSection";
import Layout from "../components/Layout";
import ContactSection from "components/ContactSection";
import Button from "../components/Button";

import MyWork from "components/MyWorkSection";

interface props {
  projects: Array<projectItem>;
}

interface projectItem {
  id: string;
  name: string;
  description: string;
  cover: { url: string };
  tags: [string];
  content: string;
}

const Home = (props: props) => {
  return (
    <Layout title="Home">
      <div className={"h-screen mesh-gradient"}>
        <section
          className={"container mx-auto h-full pt-16 grid grid-cols-4 grid-rows-4 grid-flow-col"}
        >
          <div className={"row-start-2 col-start-2 col-span-3"}>
            <header>
              <p className={"font-mono text-base lg:text-xl text-tint"}>Olá, eu sou</p>
              <h2 className={"text-5xl lg:text-6xl font-bold text-gray-300 py-3"}>
                Juliano Krindges
              </h2>
              <p className={"text-2xl lg:text-3xl"}>Desenvolvedor Web e Designer de Interfaces</p>
            </header>
          </div>
          <div className={"row-start-3 col-start-2"}>
            <Button to="/" label="home" />
          </div>
        </section>
      </div>
      <About />
      <MyWork projects={props} />
      <ContactSection />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckwdw0n920kuq01z36qpm2nf2/master"
  );

  const { projects } = await graphcms.request(
    `{
        projects(stage: PUBLISHED, orderBy: id_DESC) {
          id
          content
          cover {
            url(transformation: {image: {}})
          }
          name
          tags
          description
        }
      }
`
  );
  return {
    props: { projects },
  };
};

export default Home;
