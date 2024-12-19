"use client";

import Image from "next/image";

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <button
      className={`h-fit w-full rounded px-5 py-3 text-base font-medium shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 md:px-6 md:py-4 md:text-lg ${
        variant === "primary"
          ? "bg-indigo-700 text-white hover:bg-indigo-900 focus:shadow-[0px_0px_3px_4px_rgba(68,76,231,0.12)]"
          : "bg-white text-neutral-900 hover:bg-neutral-50 focus:shadow-[0px_0px_3px_4px_rgba(68,76,231,0.12)]"
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl, alt }) => {
  return (
    /* Content */
    <div className='flex size-full flex-col justify-start rounded bg-gradient-to-b from-[#F9FAFB] to-[#EDF0F3] align-middle shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:rounded-md md:py-2 md:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] lg:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]'>
      {/* Section Hero */}
      <section className='flex h-fit w-full flex-col py-[104px]'>
        {/* Wrapper */}
        <div className='mx-auto flex h-fit w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-3 md:gap-8 md:px-4 lg:flex-row lg:px-24'>
          {/* Hero Message */}
          <div className='flex h-fit w-full flex-col justify-start gap-8 align-middle md:gap-16 lg:max-w-[488px]'>
            <div className='flex h-fit w-full flex-col gap-4 md:gap-6'>
              <h1 className='md:text-5 h-fit w-full text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl'>
                {title}
              </h1>
              <p className='text-lg font-normal text-neutral-600 md:text-xl'>{description}</p>
            </div>
            <div className='flex w-full max-w-[458px] gap-4 md:gap-8 lg:max-w-[383px]'>
              <Button variant='secondary'>Learn more</Button>
              <Button variant='primary'>See pricing</Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className='relative h-[264px] w-[319px] rounded-lg md:h-[526px] md:w-[704px] lg:w-[696px]'>
            <Image
              src={imageUrl}
              alt={alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
