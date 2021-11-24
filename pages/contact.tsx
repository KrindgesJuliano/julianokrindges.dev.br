import Layout from "components/Layout";
import React from "react";
import { GitHub, Linkedin } from "react-feather";

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
              <ul>
                <li>
                  <GitHub />
                </li>
                <li>
                  <Linkedin />
                </li>
              </ul>
            </div>
            <div>
              <form id="contato" action="" method="post" className="text-gray font-mono">
                <label htmlFor="name">Nome:</label>
                <br />
                <input
                  type="text"
                  id="name"
                  className=" w-full form-input py-3 rounded bg-primary"
                />
                <div className="flex gap-2">
                  <div>
                    <label htmlFor="email">E-Mail</label>
                    <br />
                    <input type="email" id="email" className="form-input py-3 rounded bg-primary" />
                  </div>
                  <div>
                    <label htmlFor="phone">Telefone</label>
                    <br />
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
                      className="form-input py-3 rounded w-full bg-primary"
                    />
                  </div>
                </div>
                <label htmlFor="assunto">Assunto</label>
                <select
                  id="assunto"
                  name="assunto"
                  form="contato"
                  className="form-select py-3 rounded w-full bg-primary"
                >
                  <option value="orçamento">Orçamento</option>
                  <option value="Contratar">Contratar</option>
                  <option value="duvidas">Duvidas</option>
                  <option value="outros">Outros</option>
                </select>
                <label htmlFor="message">Mensagem</label>
                <textarea
                  name="textarea"
                  id="message"
                  cols={20}
                  rows={4}
                  maxLength={160}
                  className="form-textarea py-3 rounded w-full bg-primary"
                ></textarea>
                <input
                  type="submit"
                  value="Enviar"
                  className="border-2 border-tint rounded w-52 h-12 text-tint bg-primary"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
