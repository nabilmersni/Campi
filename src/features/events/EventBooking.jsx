import { Box, Modal } from '@mui/material';
import { useState } from 'react';
import Separator from 'src/ui/Separator';
import { formatDateRange } from 'src/utils/UtilsFunctions';
import EventPaymentLayout from './EventPaymentLayout';

function EventBooking({ event }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="flex h-full w-full flex-col items-center">
      <h2 className="mb-3 text-xl font-bold">Booking Summary</h2>
      <Separator size="medium" />

      <div className="mt-8 flex w-full flex-col gap-4">
        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Camping Period</p>
          <p>{formatDateRange(event.startDate, event.endDate)}</p>
        </div>

        <div className="flex items-center justify-between text-sm font-bold">
          <p className="text-border-light">Location</p>
          <p>Tunisia, {event.state}</p>
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
          <p>{event.price}TND</p>
        </div>

        <button
          onClick={handleOpen}
          className="my-2 w-full rounded-[0.5rem] bg-bg-light p-2 text-sm font-bold text-primary transition-all hover:bg-[#e6dfff]"
        >
          RESERVE A PLACE
        </button>

        <div className="mt-5 flex items-center gap-2">
          <img src="/img/safePayIcon.png" alt="safePayIcon" className="w-4" />
          <p className="text-[0.7rem] font-bold text-primary">
            Safe and Secure Payments. 100% Authentic products.
          </p>
        </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              maxWidth: 560,

              bgcolor: 'background.paper',
              border: '3px solid #b3a2f7',
              boxShadow: 24,
              p: 2,
              pt: 0,
              outline: 'none',
              borderRadius: '1rem',
            }}
          >
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 z-50 rounded-[0.2rem] p-2 hover:bg-primary-light"
            >
              <img src="/img/closeIcon.svg" alt="closeIcon" className="w-3" />
            </button>
            <div className="font-nunito">
              <EventPaymentLayout event={event} />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

export default EventBooking;
