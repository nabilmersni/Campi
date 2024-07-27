import LinkBtn from 'src/ui/LinkBtn';

function Footer() {
  return (
    <footer className="relative mt-32 bg-primary-dark p-5 text-primary-light lg:px-[10rem]">
      <div className="mx-auto h-full max-w-[86rem]">
        <div className="mb-16 flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start">
          <div className="flex-1 self-center">
            <img src="/img/navLogo.svg" alt="logo" className="self-center" />
          </div>
          <div className="flex flex-1 flex-col items-center gap-2">
            <h1 className="mb-4 text-4xl font-semibold">Campi</h1>
            <ul className="flex flex-col items-center gap-2">
              <LinkBtn type={'footerLink'} to={'home'}>
                Home
              </LinkBtn>
              <LinkBtn type={'footerLink'} to={'values'}>
                Our Values
              </LinkBtn>
              <LinkBtn type={'footerLink'} to={'events'}>
                Events
              </LinkBtn>
              <LinkBtn type={'footerLink'} to={'shop'}>
                Shop
              </LinkBtn>
            </ul>
          </div>
          <div className="flex flex-1 flex-col items-center lg:items-start">
            <h1 className="mb-4 text-4xl font-semibold">Get In Touch</h1>
            <p className="max-w-[25rem] text-center lg:max-w-max lg:text-left">
              Follow us on Social media and stay updated with the latest
              information about our services
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 mx-auto w-full max-w-[25rem] rounded-t-full bg-primary-light p-3 px-10 text-center font-bold text-primary">
          Copyright © 2024 Campi
        </div>
      </div>
    </footer>
  );
}

export default Footer;
