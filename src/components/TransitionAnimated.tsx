import { cx } from '@utilities';
import { Transition } from '@headlessui/react';
import { ReactNode } from 'react';


export const TransitionAnimated = ({ flag, children }: { flag: boolean; children: ReactNode; }) => {
  return <Transition show={flag}>
    <div
      className={cx(
        'mt-8',
        'size-full rounded-xl transition duration-[400ms]',
        'data-[closed]:translate-y-10 data-[closed]:opacity-0',
        'data-[leave]:duration-[400ms] data-[leave]:ease-in-out',
        'data-[leave]:data-[closed]:translate-y-0'
      )}>
      {children}
    </div>
  </Transition>;
};
