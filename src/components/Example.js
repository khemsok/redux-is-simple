// MUI
import Typography from "@material-ui/core/Typography";

// util
import { Code, CodeHighlighter } from "../util/reusableComponents";

export default function Example() {
  const storeStringCode = `// Redux
  import { Provider } from "react-redux";
  import { createStore} from "redux";
  
  // Reducer
  import { counterReducer } from "./redux/counter/counterReducer";
  
  const store = createStore(counterReducer);
  
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById("root")
  );`;

  const actionStringCode = `// types
  import { SET_INCREMENT, SET_DECREMENT } from "./constants";
  
  export const setIncrement = () => ({
    type: SET_INCREMENT,
  });
  
  export const setDecrement = () => ({
    type: SET_DECREMENT,
  });`;

  const reducerStringCode = `import { SET_INCREMENT, SET_DECREMENT } from "./constants";

  const initialState = {
    counter: 0,
  };
  
  export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_INCREMENT:
        return { ...state, counter: state.counter + 1 };
  
      case SET_DECREMENT:
        return { ...state, counter: state.counter - 1 };
  
      default:
        return state;
    }
  };`;

  const counterStringCode = `// MUI
  import Typography from "@material-ui/core/Typography";
  import Button from "@material-ui/core/Button";
  
  // Redux
  import { useSelector, useDispatch } from "react-redux";
  import { setIncrement, setDecrement } from "../redux/counter/counterAction";
  
  export default function Counter() {
    const counter = useSelector((state) => state.counter.counter);
    const dispatch = useDispatch();
    return (
      <>
        <Typography variant="h4">Counter: {counter}</Typography>
  
        <div>
          <Button
            onClick={() => {
              dispatch(setIncrement());
            }}
          >
            Increment
          </Button>
          <Button
            onClick={() => {
              dispatch(setDecrement());
            }}
          >
            Decrement
          </Button>
        </div>
      </>
    );
  }`;

  return (
    <>
      <Typography variant="h4" style={{ marginBottom: "10px" }}>
        Let's Get to an Example
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        The best way to learn is through examples, so let's create a small sample application that utilizes Redux.
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        The application that we are going to be building is a number counter which displays the number and two buttons that we can press to increment or decrement. The first thing to do in this scenario is to <b>create a Redux store</b>.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{storeStringCode}</CodeHighlighter>
      </div>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        There are a lot of things that are going on here, so let’s unpack it. We import a <b>createStore</b> function from the redux library. The createStore function takes in a reducer (we'll talk more about how to create the reducer later).{" "}
        <b>Provider</b> is a Higher Order Component (HOC) that react-redux provides that will wrap our Redux store in. The Provider will allow us to access the state inside of the store from anywhere inside of our application because it is the root
        component. There are still some things that we will need to do in order to access it, but we will get to that.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        The next step is create the actions. The two actions that we are going to create are <Code>SET_INCREMENT</Code> and <Code>SET_DECREMENT</Code>.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{actionStringCode}</CodeHighlighter>
      </div>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        As mentioned in the previous sections, actions are just a plain JavaScript object that has a type and payload (we do not need payload in this example because we are not passing any data). Also, you see that I create a constants.js file which
        stores all of our type variables. This is so that we won’t misspell the type names.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Now is where we create our reducer. Again, the reducer acts as a switch mechanism to facilitate the action that is being triggered.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{reducerStringCode}</CodeHighlighter>
      </div>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        The first thing to do when creating a reducer is that it needs an <b>initial state</b>. The initial state is similar to how you set state in React, it is simply how your state looks at the beginning. When an action gets triggered or
        dispatched, it calls the reducer function and passes the current state and the action object. So to facilitate which type to do what, the best convention is to use a <b>switch statement</b>, but you can also easily do it with if-else
        statements. In our case, we have a <Code>SET_INCREMENT</Code> and <Code>SET_DECREMENT</Code> type that will increase our counter state. In each switch case, we are just returning the states that have been adjusted as shown in
        <Code>SET_INCREMENT</Code> and <Code>SET_DECREMENT</Code>.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Ever since the release of React hooks, it makes implementation of Redux exponentially easier. To start using the states and calling our actions, all we have to do is write a couple lines of code and we are on our way of accessing it. To do
        so, we make use of the useSelector and useDispatch hooks given by react-redux.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{counterStringCode}</CodeHighlighter>
      </div>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        To get access to the counter state, all we have to do is use the <b>useSelector</b> hook. useSelector is a hook that takes in a function and we can specify which state we want it to return back. We can certainly just have it return everything
        that we have in our store, but in this case we only need the counter state, so we specify it to be state.counter. To call our actions, we have to use the <b>useDispatch</b> hook. useDispatch will return back to a dispatch function that we can
        use to call our actions like the following <Code>dispatch(setIncrement())</Code>.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        <b>Bam!</b> That is all, and now your application is running on Redux!
      </Typography>
    </>
  );
}
