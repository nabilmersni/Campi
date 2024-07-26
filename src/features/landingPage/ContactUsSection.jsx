import Lottie from 'lottie-react';

import InputField from 'src/ui/InputField';
import contactAnimation from '../../assets/lottiesAnimations/contact-us.json';
import Button from 'src/ui/Button';

function ContactUsSection() {
  return (
    <section className="mt-[-2rem] flex flex-col items-center px-4">
      <div className="flex flex-col items-center">
        <Lottie
          animationData={contactAnimation}
          loop={true}
          autoPlay={true}
          className="max-w-[27rem] sm:max-w-[35rem]"
        />

        <p className="relative z-10 mx-auto mt-[-3rem] max-w-[29rem] text-center text-xl font-semibold text-primary-dark sm:mt-[-4rem]">
          {
            "Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible"
          }
        </p>
      </div>

      <div className="mt-10 flex w-full max-w-[25rem] flex-col items-center gap-4 sm:mt-8">
        <InputField label={'Name'} placeholder={'Your name here please'} />
        <InputField
          label={'Email'}
          type="email"
          placeholder={'Your email here please'}
        />
        <InputField
          label={'Message'}
          isTextArea={true}
          placeholder={'Your message here please'}
        />

        <Button color={'primary'}>Send</Button>
      </div>
    </section>
  );
}

export default ContactUsSection;
