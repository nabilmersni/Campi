import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Button from 'src/ui/Button';
import InputField from 'src/ui/InputField';
import { setAddressFormData } from './CartSlice';

function CartAddressForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    dispatch(setAddressFormData(data));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  return (
    <div className="mt-4 flex w-full flex-col justify-start sm:max-w-[27rem]">
      <h1 className="mb-6 text-lg font-bold text-primary">Billings details</h1>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-center gap-5"
          noValidate
        >
          <InputField
            label={'Full name'}
            name={'fullname'}
            type="text"
            placeholder={'Your fullname here'}
            required
            register={register('fullname', {
              required: 'Full name is required.',
              minLength: {
                value: 3,
                message: 'Full name must be at least 3 characters long!',
              },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Full name can only contain letters.',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.fullname?.message}
          </p>

          <InputField
            label={'Street address'}
            name={'streetAddress'}
            type="text"
            placeholder={'Your street address here'}
            required
            register={register('streetAddress', {
              required: 'Street address is required.',
              minLength: {
                value: 3,
                message: 'Street address must be at least 3 characters long!',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.streetAddress?.message}
          </p>

          <InputField
            label={'Zip Code'}
            name={'zipCode'}
            type="text"
            placeholder={'Your Zip Code here'}
            required
            register={register('zipCode', {
              required: 'Zip Code is required.',
              minLength: {
                value: 4,
                message: 'Zip Code must be at least 3 characters long!',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.zipCode?.message}
          </p>

          <InputField
            label={'Phone number'}
            name={'phoneNumber'}
            type="tel"
            placeholder={'Your phone num here'}
            required
            register={register('phoneNumber', {
              required: 'Phone number is required.',
              pattern: {
                value:
                  /^(\+?\d{1,3})?[-.\s]?(\(?\d{1,4}\)?)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
                message: 'Please enter a valid phone number!',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.phoneNumber?.message}
          </p>

          <Button color={'primaryForm'}>CHECKOUT</Button>
        </form>
      </div>
    </div>
  );
}

export default CartAddressForm;
