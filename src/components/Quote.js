import { useEffect } from "react";

// MUI
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchQuote } from "../redux/quote/quoteAction";

const useStyles = makeStyles((theme) => ({
  quoteContainer: {
    borderLeft: `10px solid ${theme.palette.primary.main}`,
    // minHeight: "100px",
    padding: "10px",
  },
  author: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    marginBottom: "20px",
  },
}));

export default function Quote() {
  const classes = useStyles();

  const { quote, author, isLoading, error } = useSelector((state) => ({ quote: state.quote.quote, author: state.quote.author, isLoading: state.quote.isLoading, error: state.quote.error }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchQuote());
  }, []);

  return (
    <>
      <Typography variant="h6" style={{ marginBottom: "20px" }}>
        The Result...
      </Typography>
      {isLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </div>
      ) : (
        <div style={{ marginBottom: "50px" }}>
          <div className={classes.quoteContainer}>
            <div style={{ justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
              {error.length !== 0 ? (
                <Typography variant="h4" color="secondary" style={{ marginBottom: "20px" }}>
                  Oops...
                </Typography>
              ) : null}
              <Typography variant="h5" align="center" style={{ fontWeight: "500" }}>
                {quote}
              </Typography>
              <Typography variant="h6" align="center" className={classes.author}>
                {author}
              </Typography>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" color="primary" onClick={() => dispatch(fetchQuote())}>
              New Quote 😇
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
