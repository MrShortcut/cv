import { useCvContext } from '@context';
import { DefaultButton, ThemeToggle } from '@components';
import { cx } from '@utilities';
import { Transition } from '@headlessui/react';


export function Header () {
  const [ isShowing ] = useCvContext(s => s.isShowing);
  const [ isShowingDoc, set ] = useCvContext(s => s.isShowingDoc);

  return <Transition show={isShowing}>
    <div
      className={cx(
        'flex min-w-full gap-4',
        'size-full rounded-xl transition duration-[800ms]',
        'data-[closed]:-translate-y-11 data-[closed]:opacity-0',
        'data-[leave]:duration-[800ms] data-[leave]:ease-in-out',
        'data-[leave]:data-[closed]:translate-y-0'
      )}
    >
      <ThemeToggle />

      <DefaultButton
        text='Descargar CV'
        title='Descargar CV'
        onClick={undefined}
      />

      <DefaultButton
        text='Imprimir'
        title='Imprimir'
        onClick={() => window.print()}
      />

      <DefaultButton
        text='Doc'
        title='Imprimir'
        onClick={() => set({
          'isShowingDoc': !isShowingDoc
        })}
      />
    </div>
  </Transition>;
}
