import { Button } from '@headlessui/react';
import { FC } from 'react';

export interface DefaultButtonProps {
  text: string;
  onClick: any,
}

export const DefaultButton: FC<DefaultButtonProps> = ({
  text,
  onClick,
}) => {
  return <Button
    onClick={onClick}
    className='inline-flex items-center gap-2 rounded-full bg-white/90 dark:bg-lightDark font-semibold text-black/60 hover:text-black shadow-inner shadow-[#dededf]/40 hover:shadow-[#dededf]/90 dark:shadow-black/40 dark:hover:shadow-black/10 dark:text-white/60 dark:hover:text-white px-2 focus:outline-none data-[hover]:bg-white/10 data-[open]:bg-white/60 data-[focus]:outline-1 data-[focus]:outline-white'
  >{text} </Button>;
};
