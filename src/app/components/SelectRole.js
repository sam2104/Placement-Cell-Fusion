import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectRole() {
  const [role, setRole] = React.useState('');

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: 108,   }} size="small">
      <InputLabel id="role-select-label">Role</InputLabel>
      <Select
      style={{backgroundColor:'#C3FF93'}}
        // labelId="role-select-label"
        id="role-select"
        value={role}
        // label=""
        // label='none'
        onChange={handleChange}
        autoWidth
      >
        
        <MenuItem value="student">Student</MenuItem>
        <MenuItem value="faculty">Faculty</MenuItem>
        <MenuItem value="staff">Staff</MenuItem>
      </Select>
    </FormControl>
  );
}
