import { ReactNode } from "react";

export const Space = () => ' ';

export const CoolHr = (
  { className }: { className?: string; }
) =>
  <span className={`
    max-w-[1200px] w-[100%] flex mx-auto h-[1px]
    bg-gradient-to-l from-transparent via-[#000]/60 dark:via-white/60
    relative
    ${ className }
  `} />

export const Heading = (
  { text }: { text: string | ReactNode }
) => <h2 className='mb-2'>
    <strong className=' md:text-2xl'>
      {text}
    </strong>
  </h2>