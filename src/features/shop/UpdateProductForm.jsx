import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import shopService from 'src/services/ShopService';
import Button from 'src/ui/Button';
import CategoriesInput from 'src/ui/CategoriesInput';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import { ToastErrorMsg } from 'src/utils/ToastErrorMsg';

function UpdateProductForm({ handleToggleModal, product }) {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      title: product.title,
      subtitle: product.subtitle,
      description: product.description,
      price: product.price,
      category: product.category,
    },
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const productData = { ...data, id: product.id };
      await shopService.updateProduct(productData);
      mutate();
      toast.success('Product updated successfully!');
      handleToggleModal();
    } catch (error) {
      ToastErrorMsg(error.message);
    }
    setLoading(false);
  };

  const handleInputChange = (product) => {
    const { name, value } = product.target;
    setValue(name, value);
  };

  // eslint-disable-next-line no-unused-vars
  const { onChange, ...rest } = register('category', {
    required: 'Category is required.',
  });

  return (
    <div className="relative flex h-full flex-col">
      {loading && <Loader />}
      <h1 className="text-2xl font-semibold text-primary">Update product</h1>

      <div className="mt-5 flex flex-col items-center gap-4 overflow-hidden overflow-y-auto pr-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex w-full flex-col items-center gap-5"
          noValidate
        >
          <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row">
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

            <div className="w-full">
              <InputField
                label={'Subtitle'}
                name={'subtitle'}
                type="text"
                placeholder={'Your subtitle here'}
                required
                register={register('subtitle', {
                  required: 'Subtitle is required.',
                  minLength: {
                    value: 3,
                    message: 'Subtitle must be at least 3 characters long!',
                  },
                })}
                onChange={handleInputChange}
              />
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.subtitle?.message}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row">
            <div className="w-full">
              <CategoriesInput
                size="medium"
                register={rest}
                isMultiple={false}
              />

              <p className="mt-1 self-start text-sm text-red-400">
                {errors.category?.message}
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

          <InputField
            label={'Description'}
            name={'description'}
            isTextArea={true}
            placeholder={'Product description here please'}
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
            <Button color={'primaryForm'}>Update product</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProductForm;
