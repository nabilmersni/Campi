import Separator from 'src/ui/Separator';

function EventBooking() {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <h2 className="mb-3 text-xl font-bold">Booking Summary</h2>
      <Separator size="medium" />

      <div className="mt-8 flex w-full flex-col gap-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Camping Period</p>
          <p>1 Fev - 5 Fev</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Location</p>
          <p>Tunisia, Beja</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Remaining Places</p>
          <p>5</p>
        </div>

        <div
          className={`my-4 h-[0.2rem] w-[90%] flex-shrink-0 self-center rounded-full bg-bg-light`}
        ></div>

        <div className="flex items-center justify-between text-lg font-bold">
          <p>Total Amount</p>
          <p>360TND</p>
        </div>

        <button className="my-2 w-full rounded-[0.5rem] bg-bg-light p-2 text-sm font-bold text-primary transition-all hover:bg-[#e6dfff]">
          RESERVE A PLACE
        </button>

        <div className="mt-5 flex items-center gap-2">
          <img src="/img/safePayIcon.png" alt="safePayIcon" className="w-4" />
          <p className="text-[0.7rem] font-bold text-primary">
            Safe and Secure Payments. 100% Authentic products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default EventBooking;
