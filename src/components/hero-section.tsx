"use client";

import Image from "next/image";
import IconCheckFill from "./icons/icon-check-fill";

interface HeroSectionProps {
  title: string;
  bullets: string[];
  imageUrl: string;
  alt: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant, children, className, ...rest }) => {
  return (
    <button
      className={
        `h-fit w-full rounded px-5 py-3 text-base font-medium shadow-[0_1px_3px_rgba(0,0,0,0.06),0_1px_2px_rgba(0,0,0,0.03)] outline-none disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 md:px-6 md:py-4 md:text-lg ${
          variant === "primary"
            ? "bg-indigo-700 text-white hover:bg-indigo-900 focus:shadow-[0px_0px_3px_4px_rgba(68,76,231,0.12)]"
            : "bg-white text-neutral-900 hover:bg-neutral-50 focus:shadow-[0px_0px_3px_4px_rgba(68,76,231,0.12)]"
        }` +
        " " +
        className
      }
      {...rest}
    >
      {children}
    </button>
  );
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, bullets, imageUrl, alt }) => {
  return (
    /* Content */
    <div className='flex size-full flex-col justify-start rounded bg-white align-middle shadow-[0_1px_2px_rgba(0,0,0,0.05)] md:rounded-md md:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] lg:py-[9px] lg:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]'>
      {/* Section Hero */}
      <section className='flex h-fit w-full flex-col py-16 lg:py-0'>
        {/* Wrapper */}
        <div className='mx-auto flex h-fit w-full max-w-[1440px] flex-col items-center justify-center gap-12 px-4 md:gap-8 lg:flex-row lg:p-24'>
          {/* Hero Message */}
          <div className='flex h-fit w-full flex-col justify-start gap-8 align-middle md:gap-16 lg:max-w-[488px]'>
            <div className='flex h-fit w-full flex-col gap-8 md:gap-16'>
              <h1 className='md:text-5 h-fit w-full text-4xl font-semibold text-neutral-900 md:text-5xl lg:text-6xl'>
                {title}
              </h1>

              <ul className='flex flex-col items-start gap-5'>
                {bullets.map((desc, index) => (
                  <li
                    key={index}
                    className='flex flex-row gap-3 align-middle text-lg font-normal text-neutral-600'
                  >
                    <IconCheckFill />
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
            <div className='flex w-full max-w-[458px] gap-4 md:gap-8 lg:max-w-[383px]'>
              <Button
                variant='secondary'
                className='order-2 md:order-1'
              >
                Learn more
              </Button>
              <Button
                variant='primary'
                className='order-1 md:order-2'
              >
                See pricing
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className='relative h-[264px] w-[311px] rounded-lg md:h-[526px] md:w-[704px] lg:w-[696px]'>
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
