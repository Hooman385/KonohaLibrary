"use client";

import { FormControl, InputAdornment, styled, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "use-debounce";

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

const SearchBox = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(() => {
    return searchParams.get("search") ?? "";
  });
  const [debouncedValue] = useDebounce(value, 500);

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.delete(name);
      params.append(name, value);
    } else {
      params.delete(name);
    }
    return params.toString();
  };

  const searchHandler = (name: string = "search", value: string) => {
    router.push(pathname + "?" + createQueryString(name, value));
  };

  useEffect(() => {
    searchHandler("search", value);
  }, [debouncedValue]);

  return (
    <FormControl sx={{ paddingX: 3, width: "100%" }}>
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

export default SearchBox;
