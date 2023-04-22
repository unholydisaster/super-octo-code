import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

const Codecontainer = styled(SyntaxHighlighter)`
  width:100%;
  position: relative;
  
`;

const CodeBlock = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <Codecontainer
        style={dracula}
        language={match[1]}
        PreTag= "div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </Codecontainer>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default CodeBlock;