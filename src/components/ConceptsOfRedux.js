// MUI
import Typography from "@material-ui/core/Typography";

// util
import { Code, CodeHighlighter } from "../util/reusableComponents";

export default function ConceptsOfRedux() {
  const actionCodeString1 = `{
    type: ‘SET_INCREMENT’
}`;
  const actionCodeString2 = `{
    type: ‘FETCH_USER_DATA’,
    payload: userData
}`;

  const reducerCodeString = `const initialState = {
    theme: localStorage.getItem("theme") || "light",
  };
  
  export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_THEME:
        return { ...state, theme: action.payload };
      default:
        return state;
    }
  };`;
  return (
    <>
      <Typography variant="h4" style={{ marginBottom: "10px" }}>
        Concepts of Redux
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        The frustration that comes along with learning Redux is that it is very hard to get started. There are too many components that you have to set up before you are able to use it. I’m here to tell you that, it is simple. To understand Redux, we
        need to fully grasp the fundamental ideas behind it. For me, I like to think of Redux as a tool that is made up of three main ideas: <b>store</b>, <b>actions</b>, and <b>reducers</b>.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6">Store</Typography>
        <Typography variant="body1">
          Think of the store as a <b>home</b> for your entire application’s state. It is simply a plain JavaScript object that contains key-value pairs for any state that you would like to store.
        </Typography>
      </div>
      <div style={{ marginBottom: "20px" }}>
        <Typography variant="h6">Actions</Typography>
        <Typography variant="body1">
          Actions are plain JavaScript objects that describe the <b>type</b> of interaction that you would like to see happen. For example, <Code>SET_INCREMENT</Code> could be a type of action that increases the counter value. Or{" "}
          <Code>FETCH_USER_DATA</Code> could be another type of action. Again, it is a JavaScript object that describes what you would like to do.
        </Typography>
        <CodeHighlighter>{actionCodeString1}</CodeHighlighter>
        <Typography variant="body2">OR</Typography>
        <CodeHighlighter>{actionCodeString2}</CodeHighlighter>
        <Typography variant="body1">
          Above is usually the convention of what an action function would return. Type is the type of event that you would like to see occur, and payload is the data that you would like to pass to make change the state that resides in the store.
        </Typography>
      </div>
      <div style={{ marginBottom: "40px" }}>
        <Typography variant="h6">Reducers</Typography>
        <Typography variant="body1">
          Lastly is reducer. Reducer is a function that essentially facilitates which action you would like to see occur and how to change the state based upon the action type. Think of it as a bunch of if-else statements depending on which action
          gets triggered will change the state based upon that.
        </Typography>
        <CodeHighlighter>{reducerCodeString}</CodeHighlighter>
      </div>
    </>
  );
}
