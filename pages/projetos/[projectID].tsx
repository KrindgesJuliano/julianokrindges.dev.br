import { GraphQLClient } from "graphql-request";
import React from "react";
import Image from "components/Image";
import Layout from "components/Layout";

const Projeto = (props: any) => {
  const { project } = props;
  return (
    <Layout title={project.name}>
      <div className="pt-20 h-screen">
        <div className="container mx-auto">
          <h1>{project.name}</h1>
          <div className="h-44 w-60">
            <Image
              src={project.cover.url}
              layout="responsive"
              width="300"
              height="300"
              className="object-cover"
            />
          </div>
          <p>{project.content}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Projeto;

export async function getStaticProps({ params }: any) {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckwdw0n920kuq01z36qpm2nf2/master"
  );

  const { project } = await graphcms.request(
    `{
        project(where: {id: "${params.projectID}"}, stage: PUBLISHED) {
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
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const graphcms = new GraphQLClient(
    "https://api-us-east-1.graphcms.com/v2/ckwdw0n920kuq01z36qpm2nf2/master"
  );
  const { projects } = await graphcms.request(
    `{
         projects(stage: PUBLISHED, orderBy: id_DESC, first: 20) {
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
    paths: projects.map((projects: any) => {
      return {
        params: {
          projectID: projects.id,
        },
      };
    }),
    fallback: false,
  };
}
