import Typography from "@material-ui/core/Typography";

// util
import { Code, CodeHighlighter } from "../util/reusableComponents";

export default function ReduxThunk() {
  const storeCodeString = `
  import { createStore, applyMiddleware } from "redux";
  import thunk from "redux-thunk";
  
  const store = createStore(reducers, applyMiddleware(thunk));
  `;

  const actionCodeString = `
  import { FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS, FETCH_QUOTE_FAIL } from "./constants";

  export const fetchQuote = () => (dispatch) => {
    dispatch({ type: FETCH_QUOTE_REQUEST });
  
    const quoteUrl = "https://zenquotes.io/api/random";

    fetch(quoteUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        return dispatch({ type: FETCH_QUOTE_SUCCESS, payload: data });
      })
      .catch((err) => dispatch({ type: FETCH_QUOTE_FAIL, payload: err }));
  };
  `;

  const quoteCodeString = `
  import { useEffect } from "react";

  // Redux
  import { useSelector, useDispatch } from "react-redux";
  import { fetchQuote } from "../redux/quote/quoteAction";

  export function Quote() {
    const { quote, author, isLoading, error } = useSelector((state) => ({ quote: state.quote.quote, author: state.quote.author, isLoading: state.quote.isLoading, error: state.quote.error }));

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchQuote());
    }, []);

    return (
      <>
        {isLoading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          <div>
            <div>
              <div>
                {error.length !== 0 ? <Typography>Oops...</Typography> : null}
                <Typography>{quote}</Typography>
                <Typography>{author}</Typography>
              </div>
            </div>
            <div>
              <Button onClick={() => dispatch(fetchQuote())}>New Quote 😇</Button>
            </div>
          </div>
        )}
      </>
    );
  }
`;
  return (
    <>
      <Typography variant="h4" style={{ marginBottom: "10px" }}>
        But Wait...?
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        What if we need to run our action <b>asynchronously</b>? Like fetching data from an API. To do so, we need to add another element to our Redux store. We have to add a middleware called <b>Redux Thunk</b>.
      </Typography>

      <Typography variant="h6" style={{ marginBottom: "10px" }}>
        Redux Thunk
      </Typography>
      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Redux works in a synchronous way, so each action gets triggered in a sequence. If you would like to run an asynchronous task like fetching the data from an API, you would need to use an additional library called Redux Thunk. The library
        allows you to process asynchronous code by <b>checking if your action is returning a function</b>. This is very important to note as I described earlier that action is just plain JavaScript object. By applying the Redux Thunk middleware,
        every time an action gets triggered, it goes through the <Code>redux-thunk</Code> first and it checks if the action is returning an object or a function. <b>If the action is returning a function</b>, it will insert a <b>dispatch argument</b>{" "}
        in your function which you can use to dispatch to return which type of action you would like for it to occur.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{storeCodeString}</CodeHighlighter>
      </div>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        The only thing that is different from how we implement the store before is we imported two new components, <Code>thunk</Code> and <Code>applyMiddleware</Code>.
      </Typography>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        Let’s do a quick example of how we fetch some random quote from an API. The only major change is in the way we implement our actions. As explained above, our action now needs to return a function instead of an object in order for the
        <Code>redux-thunk</Code> to intercept it.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{actionCodeString}</CodeHighlighter>
      </div>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        There are many components in play here, let’s dissect each of them. So to reiterate again, when we are trying to perform an asynchronous action like fetching the data from an API, the <b>action has to be returning a function</b>. That is how
        the <Code>redux-thunk</Code> middleware will be able to <b>intercept and recognize that it is an asynchronous process</b>. By returning a function, <Code>redux-thunk</Code> gives you a dispatch method that will allow you to process a
        particular action type that was set in your reducer. You might be wondering why there are so many dispatches and action types. It is pretty much a <b>convention to do those three types when you are doing an API call</b>. The <b>_REQUEST</b>{" "}
        type is used to set the loader state to true. The <b>_SUCCESS</b> type is used to update the state from the data received from the API. The <b>_FAIL</b> type is used to indicate that there was an error in the call.
      </Typography>

      <div style={{ marginBottom: "20px" }}>
        <CodeHighlighter>{quoteCodeString}</CodeHighlighter>
      </div>

      <Typography variant="body1" style={{ marginBottom: "20px" }}>
        How we grab the data and dispatch our action is essentially the same as when we weren't without using <Code>redux-thunk</Code>. In this chunk of code, I’m just grabbing all the necessary states using <b>useSelector</b>. And I have a dispatch
        method which is used to trigger my <b>fetchQuote</b> action call.
      </Typography>
    </>
  );
}
