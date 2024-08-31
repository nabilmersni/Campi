import { InputAdornment, MenuItem, Select, TextField } from '@mui/material';
import ExpandMoreIcon from 'src/assets/svgs/chevronIconSelect.svg';

function InputField({
  label,
  name,
  onChange,
  color = 'primary',
  isTextArea,
  type = 'text',
  defaultValue = '',
  placeholder,
  required,
  shrink,
  size = 'medium',
  isWithIcon = false,
  isSelect,
  register,
}) {
  let sx;

  if (color === 'primary') {
    sx = {
      '& .MuiInputLabel-root': {
        color: '#7262AF', // Default label color
        fontFamily: 'Nunito, sans-serif', // Label font family
        '&.Mui-focused': {
          color: '#3A3D64', // Label color on focus
        },
      },
      '&:hover .MuiInputLabel-root': {
        color: '#3A3D64', // Label color on hover
      },

      '& .MuiOutlinedInput-root': {
        ...(isTextArea && {
          '& textarea': {
            resize: 'vertical',
            overflow: 'auto',
          },
        }),

        borderRadius: 2,

        '& fieldset': {
          borderColor: '#7262AF', // Default border color
        },
        '&:hover fieldset': {
          borderColor: '#3A3D64', // Border color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3A3D64', // Border color on focus
        },
        '& input': {
          color: '#3A3D64', // Text color
          fontFamily: 'Nunito, sans-serif', // Text font family
        },
      },
    };
  }

  if (isWithIcon) {
    return (
      <TextField
        size={size}
        label={label}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        variant="outlined"
        onChange={onChange}
        className="w-full"
        type={type}
        multiline={isTextArea}
        rows={isTextArea ? 5 : undefined}
        required={required}
        InputLabelProps={{ shrink: shrink }}
        sx={sx}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <img className="size-6" src="/img/searchIcon.svg" alt="" />
            </InputAdornment>
          ),
        }}
        {...register}
      />
    );
  }

  if (isSelect) {
    sx = {
      '& .MuiInputLabel-root': {
        color: '#7262AF', // Default label color
        fontFamily: 'Nunito, sans-serif', // Label font family
        '&.Mui-focused': {
          color: '#3A3D64', // Label color on focus
        },
      },
      '&:hover .MuiInputLabel-root': {
        color: '#3A3D64', // Label color on hover
      },

      '& .MuiOutlinedInput-root': {
        borderRadius: 2,
        '& fieldset': {
          borderColor: '#7262AF', // Default border color
        },
        '&:hover fieldset': {
          borderColor: '#3A3D64', // Border color on hover
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3A3D64', // Border color on focus
        },
        '& .MuiSelect-select': {
          color: '#3A3D64', // Text color
          fontFamily: 'Nunito, sans-serif', // Text font family
        },
      },
      '& .MuiSelect-icon': {
        color: '#3A3D64', // Icon color
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#7262AF', // Default outline color
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: '#3A3D64', // Outline color on hover
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: '#3A3D64', // Outline color on focus
      },
    };

    const menuProps = {
      PaperProps: {
        style: {
          transformOrigin: 'top right', // Start from the right of the select
          marginTop: '10px', // Adjust the vertical offset as needed
        },
      },
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'right',
      },
    };

    const menuItemSx = {
      '&.Mui-selected': {
        backgroundColor: '#E5E0FF !important', // Selected item background color
      },
      '&:hover': {
        backgroundColor: '#ded8ff', // Background color on hover
      },
    };

    return (
      <Select
        value=""
        name={name}
        onChange={onChange}
        displayEmpty
        size="small"
        sx={sx}
        className="w-[10rem] fill-primary"
        IconComponent={ExpandMoreIcon}
        MenuProps={menuProps}
        {...register}
      >
        <MenuItem sx={menuItemSx} className="text-gray-400" value="">
          Default
        </MenuItem>
        <MenuItem sx={menuItemSx} value={20}>
          Highest Price
        </MenuItem>
        <MenuItem sx={menuItemSx} value={20}>
          Lowest Price
        </MenuItem>
        <MenuItem sx={menuItemSx} value={20}>
          Newest
        </MenuItem>
        <MenuItem sx={menuItemSx} value={20}>
          Oldest
        </MenuItem>
      </Select>
    );
  }

  return (
    <TextField
      {...register}
      size={size}
      name={name}
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      variant="outlined"
      onChange={onChange}
      className="w-full"
      type={type}
      multiline={isTextArea}
      rows={isTextArea ? 5 : undefined}
      required={required}
      InputLabelProps={{ shrink: shrink }}
      sx={sx}
    />
  );
}

export default InputField;
