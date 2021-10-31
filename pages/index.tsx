import type { NextPage } from "next";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className={"h-screen mesh-gradient"}></div>
    </Layout>
  );
};

export default Home;
