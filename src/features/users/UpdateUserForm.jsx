import { useMutation, useQueryClient } from '@tanstack/react-query';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { storage } from 'src/firebase';
import userService from 'src/services/UserService';
import Button from 'src/ui/Button';
import ImageInput from 'src/ui/ImageInput';
import InputField from 'src/ui/InputField';
import Loader from 'src/ui/Loader';
import { ToastErrorMsg } from 'src/utils/ToastErrorMsg';
import { calculateAge, formatDateV1 } from 'src/utils/UtilsFunctions';
import { updateCurrentUser } from '../authentication/AuthSlice';

function UpdateUserForm({
  handleToggleModal,
  user,
  title = 'Update user',
  me,
}) {
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const { mutate } = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
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
      fullname: user.fullname,
      birthDay: user.birthDay?.seconds
        ? new Date(user.birthDay.seconds * 1000).toISOString().split('T')[0]
        : new Date(formatDateV1(user.birthDay)).toISOString().split('T')[0],
      phoneNumber: user.phoneNumber,
    },
  });

  const onSubmit = async (data) => {
    try {
      let imageURL;
      setLoading(true);
      if (imageFile) {
        imageURL = await uploadImage();
        console.log(imageURL);
      }

      const userData = {
        ...data,
        id: user.uid,
        photoURL: imageURL ? imageURL : user.photoURL,
      };
      const updatedUser = await userService.updateUser(userData);
      if (me) {
        dispatch(
          updateCurrentUser({
            ...updatedUser,
            birthDay: updatedUser.birthDay.toDate().toLocaleDateString('en-GB'),
            createdAt: updatedUser.createdAt
              .toDate()
              .toLocaleDateString('en-GB'),
          }),
        );
      }
      mutate();
      toast.success('User updated successfully!');
      handleToggleModal?.();
    } catch (error) {
      ToastErrorMsg(error.message);
    }
    setLoading(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  const uploadImage = async () => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(
        storage,
        `avatarImages/${imageFile.name}-${Date.now()}`,
      );
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log(error);
          reject(error);
        },
        async () => {
          // Handle successful uploads
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            resolve(downloadURL);
          } catch (err) {
            reject(err);
          }
        },
      );
    });
  };

  return (
    <div className="relative flex h-full flex-col">
      {loading && <Loader />}
      <h1 className="text-2xl font-semibold text-primary">{title}</h1>

      <div className="mt-10 flex flex-col items-center gap-4 overflow-hidden overflow-y-auto pr-4">
        <ImageInput
          user={user}
          imageFile={imageFile}
          setImageFile={setImageFile}
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 flex w-full flex-col items-center gap-5"
          noValidate
        >
          <div className="w-full">
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
            <p className="mt-1 self-start text-sm text-red-400">
              {errors.fullname?.message}
            </p>
          </div>

          <div className="flex w-full flex-col items-start justify-between gap-3 sm:flex-row">
            <div className="w-full">
              <InputField
                label={'Date of Birth'}
                name={'birthDay'}
                type="date"
                placeholder={'dd/mm/yyyy'}
                required
                shrink
                register={register('birthDay', {
                  required: 'Date of birth is required',
                  validate: {
                    isAtLeastTwelveYearsOld: (value) => {
                      if (!value) return true; // Skip validation if no value
                      const age = calculateAge(value);
                      return age >= 12 || 'You must be at least 12 years old';
                    },
                  },
                })}
                onChange={handleInputChange}
              />
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.birthDay?.message}
              </p>
            </div>

            <div className="flex w-full flex-col">
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
              <p className="mt-1 self-start text-sm text-red-400">
                {errors.phoneNumber?.message}
              </p>
            </div>
          </div>

          <div className="mt-3">
            <Button color={'primaryForm'}>{title}</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateUserForm;
