import { Checkbox, ListItemText, MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const names = [
  'Tent',
  'Mock',
  'Knife',
  'Sleep Bag',
  'Backpack',
  'Cookware',
  'Chairs',
  'Pillow',
  'Flashlight',
  'Cooler',
  'Water Bottle',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function CategoriesInput({ size = 'small', register }) {
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === 'string' ? value.split(',') : value);
  };

  const sx = {
    '& .MuiSelect-select': {
      color: personName.length === 0 ? '#323232' : '#1C315E', // Placeholder color
      fontWeight: '400 !important',
      fontSize: '15px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: '#7262AF', // Default border color
      borderRadius: 2,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3A3D64', // Border color on hover
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#3A3D64', // Border color on focus
    },
  };

  return (
    <Select
      multiple
      size={size}
      value={personName}
      onChange={handleChange}
      renderValue={(selected) =>
        selected.length === 0 ? 'Select category' : selected.join(', ')
      }
      displayEmpty
      MenuProps={MenuProps}
      className="ignore-click-outside w-full font-black"
      sx={sx}
      {...register}
    >
      {names.map((name) => (
        <MenuItem key={name} value={name}>
          <Checkbox
            checked={personName.indexOf(name) > -1}
            sx={{
              color: '#7262AF', // Change the color of the checkbox when unchecked
              '&.Mui-checked': {
                color: '#7262AF', // Change the color of the checkbox when checked
              },
            }}
          />
          <ListItemText
            primary={name}
            sx={{
              fontSize: '0.875rem',
              color: '#643a3a',
            }}
          />
        </MenuItem>
      ))}
    </Select>
  );
}

export default CategoriesInput;
