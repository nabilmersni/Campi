// import useClickOutside from 'src/hooks/useClickOutside';

function FormModal({ isOpen, handleToggleModal, children }) {
  // const modalRef = useClickOutside(() => {
  //   handleToggleModal();
  // });

  return (
    <>
      {isOpen && (
        <div className="absolute left-0 top-0 flex h-[100vh] w-dvw items-center justify-center bg-[#2b283b] bg-opacity-45">
          <div
            // ref={modalRef}
            className="relative z-[100] h-full max-h-[80dvh] w-[40rem] max-w-[90dvw] rounded-[1rem] border-[5px] border-[#b3a2f7] bg-white p-5 pr-2 shadow-md sm:max-w-[80dvw]"
          >
            <button
              onClick={handleToggleModal}
              className="absolute right-4 top-4 z-50 rounded-[0.2rem] p-2 hover:bg-primary-light"
            >
              <img src="/img/closeIcon.svg" alt="closeIcon" className="w-3" />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default FormModal;
