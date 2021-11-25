import React from "react";
import { GitHub, Linkedin } from "react-feather";

import Layout from "components/Layout";
import ContactForm from "../components/ContactForm";
interface Props {}

const Contact = (props: Props) => {
  return (
    <Layout title="Contatos">
      <div className="h-screen mesh-gradient">
        <div className="container mx-auto pt-28">
          <h1 className="font-mono text-2xl font-bold">
            <span className="text-tint">\</span> Contato
          </h1>
          <p className="text-lg mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa excepturi delectus amet
            assumenda. Totam nemo suscipit laudantium quo quasi nihil provident molestiae, officia
            dolore deleniti nesciunt exercitationem quis, praesentium consequatur!
          </p>
          <div className="grid grid-cols-2 mt-28">
            <div className="font-mono">
              <p>Juliano Krindges</p>
              <p>E-Mail:</p>
              <p>Telefone: </p>
              <ul className="list-none list-outside">
                <li>
                  <GitHub />
                </li>
                <li>
                  <Linkedin />
                </li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
