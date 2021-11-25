import React from "react";
import { ReactNode } from "react-markdown/lib/react-markdown";

import styles from "./style.module.css";

interface Props {
  children: ReactNode;
  openModal?: boolean;
}

const Toast = ({ children, openModal = false }: Props) => {
  const displayModal = openModal ? "block" : "hidden";

  // TODO: refatora Modal

  return <div className={`${styles.modal} ${displayModal}`}>{children}</div>;
};

export default Toast;
