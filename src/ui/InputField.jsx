import { InputAdornment, TextField } from '@mui/material';

function InputField({
  label,
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
      />
    );
  }

  return (
    <TextField
      size={size}
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

{
  /* <img
className="size-9"
src="/src/assets/svgs/dash-icon.svg"
alt=""
/> */
}
