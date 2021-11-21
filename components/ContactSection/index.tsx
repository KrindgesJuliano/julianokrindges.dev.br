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
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ipsum itaque dignissimos? Aut,
          consequatur recusandae! Fuga distinctio culpa iste, fugiat voluptatem minus, quo facilis
          accusantium odio error doloremque repudiandae obcaecati.
        </p>
        <div className="flex justify-center">
          <Button to="/contact" label="Vamos Conversar" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactSection;
