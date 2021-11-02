import React, { ReactElement } from "react";

interface Props {}

export default function Separator({}: Props): ReactElement {
  return (
    <>
      <div className={"border-tint my-4 border-b"}></div>
    </>
  );
}
