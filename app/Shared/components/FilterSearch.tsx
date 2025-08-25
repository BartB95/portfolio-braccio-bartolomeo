import { useState } from "react";
import { InputAdornment, InputBase } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "24px",
  },
  input: {
    width: "100%",
    height: 50,
    padding: "0 16px",
    borderRadius: 12,
    background: "white",
    boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
    fontFamily: "'Poppins', sans-serif",
    fontSize: 16,
    color: "#121212",
    transition: "outline 0.2s",
    "& .MuiInputBase-input::placeholder": {
      color: "#3C3C4399",
      opacity: 1,
    },
  },
  inputFocused: {
     boxShadow: "0 0 0 2px rgba(255,179,71,0.6)",
  },
});

type FilterSearchProps = {
  searchInput: string;
  setSearchInput: (value: string) => void;
  containerSx?: React.CSSProperties;
  inputSx?: React.CSSProperties;
};

const FilterSearch = ({ searchInput, setSearchInput, containerSx = {}, inputSx = {} }: FilterSearchProps) => {
  const classes = useStyles();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={classes.container} style={containerSx}>
      <InputBase
        type="search"
        placeholder="Search.."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoComplete="off"
        className={`${classes.input} ${isFocused ? classes.inputFocused : ""}`}
        style={inputSx}
        startAdornment={
          <InputAdornment position="start">
            🔍
          </InputAdornment>
        }
      />
    </div>
  );
};

export default FilterSearch;
