import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-toastify';
import shopService from 'src/services/ShopService';
import Button from 'src/ui/Button';
import Loader from 'src/ui/Loader';

function DeleteProductModal({ product }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: () => {},
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products'],
      });
    },
  });

  const handleToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleDeleteProduct = async () => {
    setIsLoading(true);
    try {
      await shopService.deleteProduct(product.id);
      toast.success('Product deleted successfully');
      mutate();
    } catch (error) {
      console.log(error.message);
    }
    setIsLoading(false);
    handleToggleModal();
  };

  return (
    <>
      {isLoading && <Loader />}
      <Button onClick={handleToggleModal} type="iconBtn" icon={'delete'} />

      {isOpen && (
        <div className="absolute left-0 top-0 flex h-[100vh] w-dvw items-center justify-center bg-[#2b283b] bg-opacity-45">
          <div className="relative z-[100] w-[35rem] max-w-[90dvw] rounded-[1rem] border-[5px] border-[#b3a2f7] bg-white p-5 pr-2 shadow-md sm:max-w-[80dvw]">
            <button
              onClick={handleToggleModal}
              className="absolute right-4 top-4 z-50 rounded-[0.2rem] p-2 hover:bg-primary-light"
            >
              <img src="/img/closeIcon.svg" alt="closeIcon" className="w-3" />
            </button>

            {/* modal content */}
            <div className="relative flex h-full flex-col">
              <h1 className="pr-10 text-2xl font-semibold text-primary">
                Are you sure you want to delete{' '}
                <span className="font-bold">{product.title}</span> product ?
              </h1>

              <div className="mt-10 flex justify-end gap-3 pr-4">
                <button
                  onClick={handleDeleteProduct}
                  className="rounded-md bg-green-400 px-6 py-1 text-white hover:bg-green-500"
                >
                  Yes
                </button>

                <button
                  onClick={handleToggleModal}
                  className="rounded-md bg-red-400 px-6 py-1 text-white hover:bg-red-500"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DeleteProductModal;
