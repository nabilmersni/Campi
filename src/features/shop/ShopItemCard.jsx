import { useDispatch } from 'react-redux';
import Button from 'src/ui/Button';
import LinkBtn from 'src/ui/LinkBtn';
import { addCartItem } from '../cart/CartSlice';
import useCheckCartItemAdded from 'src/hooks/useCheckCartItemAdded';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import DeleteProductModal from './DeleteProductModal';
import { useState } from 'react';
import { setCategories } from './ShopSlice';
import FormModal from 'src/ui/FormModal';
import UpdateProductForm from './UpdateProductForm';

function ShopItemCard({ type = 'landingPage', img = '/img/tent.png', item }) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = { ...item, quantity: 1, total: item.price };
    dispatch(addCartItem(cartItem));
    toast.success('Item added to cart successfully!');
  };

  const handleToggleModal = () => {
    setIsOpen((isOpen) => !isOpen);
    dispatch(setCategories(item.category));
  };

  const isAdded = useCheckCartItemAdded(item);

  if (type === 'landingPage') {
    return (
      <div className="flex min-h-[20rem] w-full flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 sm:w-fit sm:min-w-[23rem]">
        <div className="mb-2 h-[10rem] w-full rounded-[2rem] bg-white-light p-3">
          <img
            src={item.photoURLs[0] || img}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-contain"
          />
        </div>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-primary">{item.title}</h2>
          <span className="max-w-[15rem] overflow-hidden truncate whitespace-nowrap text-[.8rem] text-primary">
            {item.subtitle}
          </span>
        </div>

        <div className="mb-3 flex items-center justify-center gap-5">
          <div className="flex flex-1 items-center justify-center gap-2">
            <img src="/img/starsIcon.svg" alt="locationIcon" className="w-20" />
            <span className="text-sm font-bold text-primary">(26)</span>
          </div>
        </div>

        <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>

        <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
          <span className="text-xl font-extrabold text-primary">
            {item.price} TND
          </span>

          <div className="my-1 h-1 w-10 rounded-full bg-primary-light"></div>

          <LinkBtn
            to={`/userside/shop/${item.id}`}
            size={4}
            type={'primaryLight'}
          >
            more info
          </LinkBtn>
          {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div> */}
        </div>
      </div>
    );
  }

  if (type === 'dash') {
    return (
      <div className="flex min-h-[20rem] w-full flex-col items-center rounded-[3rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 sm:w-fit sm:min-w-[22rem]">
        <div className="mb-2 h-[10rem] w-full rounded-[2rem] bg-white-light p-3">
          <img
            src={item.photoURLs[0]}
            alt="camp-img"
            className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-contain"
          />
        </div>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold text-primary">{item.title}</h2>
          <span className="max-w-[15rem] overflow-hidden truncate whitespace-nowrap text-[.8rem] text-primary">
            {item.subtitle}
          </span>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
          <span className="text-xl font-extrabold text-primary">
            ${item.price}
          </span>
          <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>
          <div className="flex w-full items-center justify-center gap-3 px-3">
            <Link to={`/userside/shop/${item.id}`}>
              <Button type="iconBtn" icon={'view'} />
            </Link>
            <Button
              onClick={handleToggleModal}
              type="iconBtn"
              icon={'update'}
            />
            <DeleteProductModal product={item} />
          </div>

          <FormModal isOpen={isOpen} handleToggleModal={handleToggleModal}>
            <UpdateProductForm
              product={item}
              handleToggleModal={handleToggleModal}
            />
          </FormModal>
        </div>
      </div>
    );
  }

  if (type === 'userside') {
    return (
      <Link to={`/userside/shop/${item.id}`}>
        <div className="flex min-h-[20rem] w-full flex-col items-center rounded-[2rem] border-[.2rem] border-primary bg-[#F9FDFF] p-3 shadow-md sm:w-fit sm:min-w-[20rem]">
          <div className="relative mb-2 h-[10rem] w-full rounded-[2rem] bg-white-light p-3">
            <img
              src={item.photoURLs[0]}
              alt="camp-img"
              className="h-full w-full rounded-[2rem] rounded-t-[3rem] object-contain"
            />

            <div className="absolute right-2 top-2 rounded-full border-[3px] border-border-light bg-primary-light p-1 px-4 text-sm font-semibold">
              {item.category}
            </div>
          </div>

          <div className="mb-3 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-primary">{item.title}</h2>
            <span className="max-w-[15rem] overflow-hidden truncate whitespace-nowrap text-[.8rem] text-primary">
              {item.subtitle}
            </span>
          </div>

          <div className="flex w-full flex-col items-center justify-center gap-2 px-3">
            <span className="text-xl font-extrabold text-primary">
              ${item.price}
            </span>
            <div className="mb-3 size-[.3rem] rounded-full bg-primary sm:block"></div>

            <button
              disabled={isAdded}
              onClick={(e) => {
                handleAddToCart();
                e.preventDefault();
              }}
              className={`rounded-full px-[1.1rem] py-[.4rem] text-center text-[1rem] font-extrabold transition-all ${isAdded ? 'bg-[#ece9ff] text-[#9d97c7]' : 'bg-primary-light text-primary hover:bg-[#d3caff]'}`}
            >
              {isAdded ? 'Already in Cart' : 'Add to cart'}
            </button>

            {/* <div className="size-[.3rem] rounded-full bg-primary sm:block"></div> */}
          </div>
        </div>
      </Link>
    );
  }
}

export default ShopItemCard;
