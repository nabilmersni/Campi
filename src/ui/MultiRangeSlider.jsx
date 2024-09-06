import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceRange } from 'src/features/shop/ShopSlice';

const minDistance = 10;

const CustomSlider = styled(Slider)({
  color: '#BEB3EB', // Active track color
  '& .MuiSlider-thumb': {
    width: 15,
    height: 24,
    boxShadow: 'none',
    borderRadius: 3,
    color: '#E5E0FF',
    border: '3px solid #BEB3EB',
    transition: 'all 0.1s ease',
    '&::before': {
      display: 'none', // Remove default MUI thumb shadow effect
    },
    '&:hover, &.Mui-active': {
      boxShadow: 'none',
      border: '3px solid #beb3eb',
      color: '#8574ca',
    },
    '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-track': {
    height: 8,
    borderRadius: 4,
  },
  '& .MuiSlider-rail': {
    color: '#F2EFFF', // Inactive track color
    opacity: 1,
    height: 8,
    borderRadius: 4,
  },
});

function MultiRangeSlider() {
  // const [value, setValue] = useState([20, 37]);
  const { priceRange } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      // setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      dispatch(
        setPriceRange([
          Math.min(newValue[0], priceRange[1] - minDistance),
          priceRange[1],
        ]),
      );
    } else {
      // setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      dispatch(
        setPriceRange([
          priceRange[0],
          Math.max(newValue[1], priceRange[0] + minDistance),
        ]),
      );
    }
  };

  return (
    <div className="flex w-[100%] flex-col gap-2">
      <div className="flex items-center justify-center gap-3 rounded-[0.5rem] bg-bg-light px-4 py-1 text-sm">
        <span className="font-semibold">{priceRange.at(0)}TND </span>
        <div className="h-1 w-3 rounded-full bg-border-light"></div>
        <span className="font-semibold">{priceRange.at(1)}TND </span>
      </div>
      <CustomSlider
        value={priceRange}
        min={0}
        max={1000}
        onChange={handleChange1}
        disableSwap
        className="mx-auto max-w-[93%] self-center"
      />
    </div>
  );
}

export default MultiRangeSlider;
