import { TextField } from '@mui/material';

function InputField({
  label,
  onChange,
  color = 'primary',
  isTextArea,
  type = 'text',
  defaultValue = '',
  placeholder,
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

  return (
    <TextField
      label={label}
      defaultValue={defaultValue}
      placeholder={placeholder}
      variant="outlined"
      onChange={onChange}
      className="w-full"
      type={type}
      multiline={isTextArea}
      rows={isTextArea ? 5 : undefined}
      sx={sx}
    />
  );
}

export default InputField;
