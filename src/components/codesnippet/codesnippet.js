import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// Choose the style you want from the styles provided by the library
import { dark, oneLight} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import dedent from 'dedent';

const CodeSnippet = (param) => {
    const sample = dedent`${param.sample}`;
  return (
    <SyntaxHighlighter language="javascript" style={oneLight}>
      {sample}
    </SyntaxHighlighter>
  );
};

export default CodeSnippet;