import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import shopService from 'src/services/ShopService';

function OrderItem({ item }) {
  const [selected, setSelected] = useState(false);
  const {
    isPending,
    data: products,
    error,
  } = useQuery({
    queryKey: ['products'],
    queryFn: shopService.getAllProducts,
  });
  const [boughtProducts, setBoughtProducts] = useState([]);

  useEffect(() => {
    if (products) {
      const temp = [];
      products.map((product) => {
        if (Object.keys(item.cartItems).includes(product.id)) {
          temp.push(product);
        }
      });

      setBoughtProducts(temp);
    }
  }, [products, item]);

  const ref = useRef(null);

  return (
    <div className="rounded-[1rem] border-[3px] border-border-light bg-white p-3">
      <header
        role="button"
        onClick={() => setSelected((prevState) => !prevState)}
        className="flex items-center justify-between p-4 font-medium"
      >
        <div className="flex w-full flex-wrap items-center gap-3 gap-y-6">
          <img src="/img/orderIcon.svg" alt="orderIcon" className="w-11" />
          <div className="mr-auto flex">
            <span className="mr-1 text-primary">Oder num: </span>{' '}
            <p
              className="max-w-[5rem] truncate sm:max-w-full xsm:max-w-[25vw]"
              title={item.id}
            >
              {item.id}
            </p>
          </div>
          <div className="flex items-center gap-3 pr-0 sm:pr-4">
            {item.delivery ? (
              <img
                src="/img/deliveryOk.svg"
                alt="deliveryOk"
                className="w-8"
                title="Delivered"
              />
            ) : (
              <img
                src="/img/deliveryPending.svg"
                alt="deliveryPending"
                className="w-8"
                title="Delivery: Pending"
              />
            )}

            {item.state ? (
              <img
                src="/img/paid.svg"
                alt="paid"
                className="w-8"
                title="paid"
              />
            ) : (
              <img
                src="/img/notPaid.svg"
                alt="notPaid"
                className="w-8"
                title="not Paid"
              />
            )}

            <p className="ml-3 font-bold text-primary">Total: {item.total}</p>
          </div>
        </div>
        <img
          src="/img/chevron.svg"
          alt="chevron"
          className={`w-5 transition-transform ${selected ? 'rotate-180' : ''}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all"
        style={{ height: selected ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div
          className="flex flex-col items-center justify-center p-4 pt-2"
          ref={ref}
        >
          <div
            className={`mb-6 mt-1 h-[0.2rem] w-[97%] flex-shrink-0 rounded-full bg-bg-light`}
          ></div>

          <div className="flex flex-wrap justify-center gap-5 sm:justify-normal">
            {boughtProducts?.map((boughtProduct) => (
              <div
                key={boughtProduct.id}
                className="relative flex size-[12rem] flex-col items-center justify-center gap-2 rounded-[1rem] border-[3px] border-border-light p-2"
              >
                <div className="bg-slate-200 flex size-[7rem] w-full items-center justify-center rounded-[0.9rem]">
                  <img
                    src={boughtProduct.photoURLs[0]}
                    alt=""
                    className="size-full object-contain p-2"
                  />
                </div>

                <p className="max-w-[10rem] truncate font-semibold">
                  Tent back packs
                </p>
                <div className="absolute right-3 top-3 flex size-8 items-center justify-center truncate rounded-full bg-primary text-[0.7rem] font-bold text-white">
                  <span>X{item.cartItems[boughtProduct.id]}</span>
                </div>

                <div className="flex items-center justify-center truncate rounded-full text-sm font-bold text-black-light">
                  <span className="font-semibold">unit price: </span>{' '}
                  <span>{boughtProduct.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
