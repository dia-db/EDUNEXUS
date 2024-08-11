import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const Dropdown = ({ label, value, onChange, options }) => {
  return (
    <TextField
      select
      label={label}
      value={value}
      onChange={onChange}
      variant="outlined"
      InputProps={{ style: { color: 'white' } }}
      InputLabelProps={{ style: { color: 'brown', fontSize: 19, width: '100%', textAlign: 'center', fontWeight: 'bold' } }}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
