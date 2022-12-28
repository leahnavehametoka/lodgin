import { Autocomplete, TextField } from "@mui/material";
import React from "react";
const AutocompleteGeneric=({data,label})=>{
    return(
        <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={data}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
    )
}
export default AutocompleteGeneric