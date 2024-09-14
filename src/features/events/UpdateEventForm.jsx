import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import eventService from 'src/services/EventService';
import Button from 'src/ui/Button';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import StatesInput from 'src/ui/StatesInput';
import { ToastErrorMsg } from 'src/utils/ToastErrorMsg';

function UpdateEventForm({ handleToggleModal, event }) {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
      });
    },
  });

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      title: event.title,
      startDate: new Date(event.startDate).toISOString().split('T')[0],
      endDate: new Date(event.endDate).toISOString().split('T')[0],
      description: event.description,
      price: event.price,
      state: event.state,
    },
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const eventData = { ...data, id: event.id };
      await eventService.updateEvent(eventData);
      mutate();
      toast.success('Event updated successfully!');
      handleToggleModal();
    } catch (error) {
      ToastErrorMsg(error.message);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  // eslint-disable-next-line no-unused-vars
  const { onChange, ...rest } = register('state', {
    required: 'State is required.',
  });

  return (
    <div className="relative flex h-full flex-col">
      {loading && <Loader />}
      <h1 className="text-2xl font-semibold text-primary">Update event</h1>

      <div className="mt-5 flex flex-col items-center gap-4 overflow-hidden overflow-y-auto pr-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex w-full flex-col items-center gap-5"
          noValidate
        >
          <div className="flex w-full items-start justify-between gap-3">
            <div className="w-full">
              <InputField
                label={'Title'}
                name={'title'}
                type="text"
                placeholder={'Your title here'}
                required
                register={register('title', {
                  required: 'Title is required.',
                  minLength: {
                    value: 3,
                    message: 'Title must be at least 3 characters long!',
                  },
                })}
                onChange={handleInputChange}
              />
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.title?.message}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row">
            <div className="w-full">
              <StatesInput
                size="medium"
                isMultiple={false}
                register={rest}
                defaultValue={event.state}
              />

              <p className="mt-1 self-start text-sm text-red-400">
                {errors.state?.message}
              </p>
            </div>

            <div className="w-full">
              <InputField
                label={'Price'}
                name={'price'}
                type="number"
                required
                register={register('price', {
                  required: 'Price is required',
                  validate: (value) =>
                    value > 0 || 'Price must be greater than 0',
                })}
                onChange={handleInputChange}
              />
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.price?.message}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row">
            <div className="w-full">
              <InputField
                label={'Start Date'}
                name={'startDate'}
                type="date"
                placeholder={'dd/mm/yyyy'}
                required
                shrink
                register={register('startDate', {
                  required: 'Start Date is required',
                  // validate: {
                  //   notPastDate: (value) => {
                  //     const selectedDate = new Date(value);
                  //     const currentDate = new Date();
                  //     currentDate.setHours(0, 0, 0, 0); // Set current date to midnight to only compare dates, not times
                  //     return (
                  //       selectedDate >= currentDate ||
                  //       'Start Date cannot be in the past'
                  //     );
                  //   },
                  // },
                })}
                onChange={handleInputChange}
              />

              <p className="mt-1 self-start text-sm text-red-400">
                {errors.startDate?.message}
              </p>
            </div>

            <div className="w-full">
              <InputField
                label={'End Date'}
                name={'endDate'}
                type="date"
                placeholder={'dd/mm/yyyy'}
                required
                shrink
                register={register('endDate', {
                  required: 'End Date is required',
                  validate: (endDate) => {
                    const startDate = getValues('startDate');
                    return (
                      endDate > startDate ||
                      'End Date cannot be less that the Start Date'
                    );
                  },
                })}
                onChange={handleInputChange}
              />

              <p className="mt-1 self-start text-sm text-red-400">
                {errors.endDate?.message}
              </p>
            </div>
          </div>

          <InputField
            label={'Description'}
            name={'description'}
            isTextArea={true}
            placeholder={'Event description here please'}
            required
            register={register('description', {
              required: 'Description is required.',
              minLength: {
                value: 3,
                message: 'Description must be at least 3 characters long!',
              },
            })}
            onChange={handleInputChange}
          />
          <p className="-mt-4 self-start text-sm text-red-400">
            {errors.description?.message}
          </p>

          <div>
            <Button color={'primaryForm'}>Update event</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateEventForm;
