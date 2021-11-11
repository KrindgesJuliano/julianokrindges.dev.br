import About from "../components/AboutSection";
import Projects from "../components/ProjectSection";
import Layout from "../components/Layout";

import { postObj } from "../ts/app_interfaces";
import { API_URL } from "../config";

interface postArray {
  items: Array<postObj>;
}

const Home = (postsIndex: postArray) => {
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
            <button className={"border-2 w-52 h-12 rounded border-tint"}>
              <span className={"text-tint font-mono"}>Vamos Conversar</span>
            </button>
          </div>
        </section>
      </div>
      <About />
      <Projects projects={postsIndex} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`${API_URL}/collection/y8ui3sf8t6oa?content`);
  const postsIndex: postArray = await res.json();

  return {
    props: postsIndex,
  };
};

export default Home;
