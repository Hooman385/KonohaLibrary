"use client";

import { FormControl, InputAdornment, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

const SearchField = styled(TextField)(() => ({
  "& label.Mui-focused": {
    color: "white",
  },

  "& .MuiInputBase-input": {
    color: "white",
  },
  "& .MuiInputBase-root:after": {
    borderBottom: "white solid 1px",
  },
}));

const CategoriesSearchBox = () => {
  const [value, setValue] = useState<string>("");

  return (
    <FormControl sx={{ paddingX: 3 }}>
      <SearchField
        label="Search"
        variant="filled"
        color="primary"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              sx={{
                display: value ? "block" : "none",
                cursor: "pointer",
              }}
              onClick={() => setValue("")}
            >
              <ClearIcon />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default CategoriesSearchBox;
