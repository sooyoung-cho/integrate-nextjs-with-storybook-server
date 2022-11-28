// import { styled } from "@stitches/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

export const Button333 = styled.button`
  padding: 10px 20px;
  width: ${(props) => (props.size === "small" ? "100px" : "200px")};
  background-color: ${(props) => props.backgroundColor || "#c6c6c6"};
  border: none;
`;

export default function ButtonView({
  label = "default",
  size,
  backgroundColor,
}) {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  if (isServer) {
    return (
      <div>
        <h1>ButtonView</h1>
        <Button333
          size={size}
          backgroundColor={backgroundColor}
          onClick={() => console.log("server!!!")}
        >
          {label}
        </Button333>
      </div>
    );
  }

  return <div onClick={() => console.log("client!")}>This is Browser!!!!!</div>;
}
