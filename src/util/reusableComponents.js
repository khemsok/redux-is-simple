// Redux
import { useSelector } from "react-redux";

// MUI
import { makeStyles } from "@material-ui/core/styles";

// Syntax Highlighter
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow as light } from "react-syntax-highlighter/dist/esm/styles/prism";
import { materialDark as dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

export function Code({ children }) {
  const classes = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.type === "dark" ? "#303030" : "#e8e8e8",
      borderRadius: "5px",
      padding: "2px 10px",
    },
  }))();
  return <code className={classes.root}>{children}</code>;
}

export function CodeHighlighter({ children }) {
  const theme = useSelector((state) => state.theme.theme);
  SyntaxHighlighter.registerLanguage("jsx", jsx);

  return (
    <SyntaxHighlighter language="jsx" style={theme === "light" ? light : dark} customStyle={{ borderRadius: "10px" }}>
      {children}
    </SyntaxHighlighter>
  );
}
