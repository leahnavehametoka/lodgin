import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import AutocompleteGeneric from '../../Services/AutoComplate';
import { Box, Button, Slider } from '@mui/material';
import TableRes from './TableRes';
import './SearchScrean.css';
const SearchScreen=()=>{
    const [value, setValue] = useState([0, 0]);

    const Country = ['israel','japan','USA']
    const City = ['jerusalem','modiin','bne-berak']

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const  onsubmit=()=>{

    }
return(<>
<AutocompleteGeneric data={Country} label={"Country"}/>
<AutocompleteGeneric data={City} label={"City"}/>

<Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        max={1200}
        onChange={handleChange}
        valueLabelDisplay="auto"
        color="primary"
        // getAriaValueText={valuetext}
      />
    </Box>
    <Button onClick={onsubmit}>Search</Button>
    <TableRes/>
  </>)
}
export default SearchScreen