// MUI
import Typography from "@material-ui/core/Typography";

export default function WhatIsRedux() {
  return (
    <>
      <Typography variant="h3" align="center" style={{ marginBottom: "20px" }}>
        What Is Redux?
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "70px" }}>
        <span style={{ fontSize: "1.5em", fontWeight: "700", lineHeight: "0" }}>Redux</span> is a state management library that allows users to maintain the state of the entire application in a single immutable tree. If you have worked with React
        long enough, then you know that there is some pain in dealing with handling the states when your application scales up. Moving one state from one component to the next and drilling it down further causes a lot of frustration and annoyance and
        to be quite frank it is not a really good solution in handling that… Redux is able to solve all that.
      </Typography>

      <div style={{ marginBottom: "60px" }}>
        <Typography variant="h5" align="center" style={{ fontWeight: "500" }}>
          <span style={{ fontSize: "4em", lineHeight: "0" }}>"</span>
          Redux helps you write applications that behave consistently, run in different environments, and are easy to test.
        </Typography>
        <Typography variant="h6" align="right">
          - Redux
        </Typography>
      </div>

      <img style={{ width: "100%", maxWidth: "500px", borderRadius: "20px", display: "block", margin: "0 auto 20px auto" }} src="/redux_store_diagram.png" alt="redux vs. no redux" />

      <Typography variant="subtitle2" align="center" style={{ marginBottom: "20px" }}>
        Without Redux vs With Redux
      </Typography>
    </>
  );
}
