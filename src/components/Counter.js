// MUI
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setIncrement, setDecrement } from "../redux/counter/counterAction";

// util
import { Code } from "../util/reusableComponents";

export default function Counter() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        Our Work Comes To Life...
      </Typography>
      <Typography variant="h4" align="center" style={{ marginBottom: "20px" }}>
        Counter: <Code>{counter}</Code> 🔥
      </Typography>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(setIncrement());
          }}
          style={{ marginRight: "20px" }}
        >
          Increment
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            dispatch(setDecrement());
          }}
        >
          Decrement
        </Button>
      </div>
    </>
  );
}
