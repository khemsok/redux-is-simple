import Typography from "@material-ui/core/Typography";

import { Code } from "../util/reusableComponents";

export default function End() {
  return (
    <>
      <Typography variant="h4" style={{ marginBottom: "20px" }}>
        The End
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Redux is an amazing tool to have in your repertoire. It makes the process of managing your application’s state exponentially easier, especially with the addition of hooks. Redux allows you to take a peek at the entirety of your application’s
        state at any moment and know exactly what is going on. There are also many great tools that you can use alongside Redux to make managing your application’s state even easier. One of them is the{" "}
        <b>
          <a href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
            Redux DevTools Chrome Extension
          </a>
        </b>
        . This tool allows you to visualize your <b>application’s state in real time</b> and also go back in time if needed to debug any issues that you might have.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: "40px" }}>
        Thank you for taking the time to read through this. Please let me know if you have any questions.
      </Typography>
      <Typography variant="body1" align="center" style={{ marginBottom: "20px", fontSize: "1.1em", fontWeight: "700" }}>
        Built with 💖 by{" "}
        <a href="https://github.com/khemsok" target="_blank" style={{ textDecoration: "none", color: "inherit" }}>
          <Code>Khem</Code>
        </a>
      </Typography>
    </>
  );
}
