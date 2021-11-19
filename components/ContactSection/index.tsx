import React from "react";
import Button from "../Button";

interface Props {}

const ContactSection = (props: Props) => {
  return (
    <React.Fragment>
      <div className="container mx-auto h-auto py-24 px-40">
        <h2 className="font-mono text-2xl mb-16 font-bold">
          <span className="text-tint">\</span> Entre em Contato
        </h2>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum itaque dignissimos? Aut,
          consequatur recusandae! Fuga distinctio culpa iste, fugiat voluptatem minus, quo facilis
          accusantium odio error doloremque repudiandae obcaecati.
        </p>
        <Button link="/contact">
          <a className={"border-2 w-52 h-12 rounded border-tint"}>
            <span className={"text-tint font-mono"}>Vamos Conversar?</span>
          </a>
        </Button>
      </div>
    </React.Fragment>
  );
};

export default ContactSection;
