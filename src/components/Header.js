// MUI
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/theme/themeAction";

// util
import DarkModeToggle from "react-dark-mode-toggle";

const useStyles = makeStyles((theme) => ({
  title: {
    transition: ".2s ease-in",
    textDecoration: "none",
    color: "inherit",
    borderRadius: "5px",
    padding: "2px 5px",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.type === "dark" ? "#303030" : "#e8e8e8",
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const toggleTheme = () => {
    theme === "light" ? dispatch(setTheme("dark")) : dispatch(setTheme("light"));
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
      <Typography variant="h6" className={classes.title} component="a" href="/">
        REDUX IS SIMPLE 🦉
      </Typography>

      <DarkModeToggle onChange={toggleTheme} checked={theme === "light" ? false : true} speed={2.5} size={50} />
    </div>
  );
}
