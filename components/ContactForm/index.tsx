import React, { useState, useReducer, useCallback } from "react";

import Toast from "../Toast";

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const ContactForm = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [success, setSuccess] = useState(false);

  const handleSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contato", formData }),
      })
        .then(() => setSuccess(true))
        .catch((error) => console.log(error));
    },
    [formData]
  );

  return (
    <div>
      <Toast openModal={success}>
        <p>Enviado com sucesso!</p>
      </Toast>
      <form
        id="contato"
        onSubmit={handleSubmit}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        className="text-gray font-mono"
      >
        <p className={`hidden`}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>
        <input type="hidden" name="form-name" value="contato" />
        <div className="my-2">
          <label htmlFor="name">Nome:</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={setFormData}
            className="w-full py-3 rounded bg-primary"
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mb-2">
          <div>
            <label htmlFor="email">E-Mail</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              onChange={setFormData}
              className="form-input py-3 rounded w-full bg-primary"
            />
          </div>
          <div>
            <label htmlFor="phone">Telefone</label>
            <br />
            <input
              type="tel"
              name="phone"
              id="phone"
              onChange={setFormData}
              placeholder="(00) 00000-0000"
              // pattern="\([0-9]{2}\) [0-9]{4,6}-[0-9]{3,4}$"
              className="form-input py-3 rounded w-full bg-primary"
            />
          </div>
        </div>
        <div className="mb-2">
          <label htmlFor="assunto">Assunto</label>
          <select
            id="assunto"
            name="assunto"
            form="contato"
            onChange={setFormData}
            defaultValue="orcamento"
            className="form-select py-3 rounded w-full bg-primary"
          >
            <option value="chose">escolha uma opção</option>
            <option value="orcamento">Orçamento</option>
            <option value="contratar">Contratar</option>
            <option value="duvidas">Duvidas</option>
            <option value="outros">Outros</option>
          </select>
        </div>
        <div className="mb-2">
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="textarea"
            id="message"
            cols={20}
            rows={4}
            maxLength={160}
            onChange={setFormData}
            className="form-textarea py-3 rounded w-full bg-primary"
          ></textarea>
        </div>
        <input
          type="submit"
          value="Enviar"
          className="cursor-pointer border-2 border-tint rounded w-52 h-12 text-tint bg-primary"
        />
      </form>
    </div>
  );
};

export default ContactForm;
