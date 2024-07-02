import { useCvContext } from '@context';
import { DefaultButton, ThemeToggle } from '@components';
import { cx } from '@utilities';
import { Transition } from '@headlessui/react';
import pdfOcrDark from '../assets/pdfOcrDark.pdf'
import pdfOcrLight from '../assets/pdfOcrLight.pdf'
import { useEffect } from 'react';


export function Header () {
  const [ isDarkMode ] = useCvContext(s => s.isDarkMode);
  const [ isShowing ] = useCvContext(s => s.isShowing);
  const [ isShowingDoc, set ] = useCvContext(s => s.isShowingDoc);
  const [ isShowingClouds ] = useCvContext(s => s.isShowingClouds);
  const [ isDownloading ] = useCvContext(s => s.isDownloading);

  useEffect(() => {
    setTimeout(() => set({ 'isDownloading': false }), 4000)
  }, [ isDownloading ])

  return <Transition show={isShowing}>
    <div
      className={cx(
        'flex min-w-full gap-0 md:gap-4',
        'size-full rounded-xl transition duration-[800ms]',
        'data-[closed]:-translate-y-11 data-[closed]:opacity-0',
        'data-[leave]:duration-[800ms] data-[leave]:ease-in-out',
        'data-[leave]:data-[closed]:translate-y-0',
      )}
    >
      <ThemeToggle />

      <DefaultButton
        title={isDownloading ? 'Descargando' : 'Descargar CV'}
        onClick={() => set({ 'isDownloading': true })}
        text={<a
          href={isDarkMode ? pdfOcrDark : pdfOcrLight}
          download='Rodrigo_Moreno_Frontend'
        >
          {isDownloading ? 'Descargando' : 'Descargar'}
        </a>}
      />

      <DefaultButton
        text='Imprimir'
        title='Imprimir'
        onClick={async () => new Promise((resolve) => {
          set({
            'isShowingClouds': false,
            'isPrinting': true
          })
          resolve(true)
        })
          .then(res => res && window.print())
          .finally(() => set({
            'isPrinting': false,
            'isShowingClouds': true
          }))}
      />

      <DefaultButton
        text='Doc'
        title='Imprimir'
        onClick={() => set({ 'isShowingDoc': !isShowingDoc })}
        className={cx(
          'text-xs md:text-sm lg:text-base inline-flex items-center rounded-full bg-white/90 dark:bg-lightDark/70 font-semibold text-black/60 hover:text-black shadow-inner shadow-[#dededf]/40 hover:shadow-[#dededf]/90 dark:shadow-black/40 dark:hover:shadow-black/10 dark:text-white/60 dark:hover:text-white px-2 focus:outline-none data-[hover]:bg-white/10 dark:data-[hover]:bg-white/10 data-[open]:bg-white/60 dark:data-[open]:bg-white/60 data-[focus]:outline-1 data-[focus]:outline-white',
          isShowingDoc && `text-[#ed9e27] dark:text-salmon text-xs md:text-sm lg:text-base inline-flex items-center rounded-full bg-white/90 dark:bg-lightDark/70 font-semibold text-black/60 hover:text-[#ed9e27] shadow-inner shadow-[#f6e2c1] dark:shadow-salmon hover:shadow-[#ed9e276f] dark:shadow-black/40 dark:hover:shadow-black/10 dark:text-white/60 dark:hover:text-white px-2 focus:outline-none data-[hover]:bg-[#ffefd6] dark:data-[hover]:bg-white/10 data-[open]:bg-white/60 dark:data-[open]:bg-white/60 data-[focus]:outline-1 data-[focus]:outline-white`
        )}
      />

      <DefaultButton
        text='Nubes'
        title={isShowingClouds ? 'Ocultar nubes' : 'Mostrar Nubes'}
        onClick={() => set({ 'isShowingClouds': !isShowingClouds })}
        className={cx(
          'text-xs md:text-sm lg:text-base inline-flex items-center rounded-full bg-white/90 dark:bg-lightDark/70 font-semibold text-black/60 hover:text-black shadow-inner shadow-[#dededf]/40 hover:shadow-[#dededf]/90 dark:shadow-black/40 dark:hover:shadow-black/10 dark:text-white/60 dark:hover:text-white px-2 focus:outline-none data-[hover]:bg-white/10 dark:data-[hover]:bg-white/10 data-[open]:bg-white/60 dark:data-[open]:bg-white/60 data-[focus]:outline-1 data-[focus]:outline-white',
          !isShowingClouds && `text-[#ed9e27] dark:text-salmon text-xs md:text-sm lg:text-base inline-flex items-center rounded-full bg-white/90 dark:bg-lightDark/70 font-semibold text-black/60 hover:text-[#ed9e27] shadow-inner shadow-[#f6e2c1] dark:shadow-salmon hover:shadow-[#ed9e276f] dark:shadow-black/40 dark:hover:shadow-black/10 dark:text-white/60 dark:hover:text-white px-2 focus:outline-none data-[hover]:bg-[#ffefd6] dark:data-[hover]:bg-white/10 data-[open]:bg-white/60 dark:data-[open]:bg-white/60 data-[focus]:outline-1 data-[focus]:outline-white`
        )}
      />
    </div>
  </Transition>;
}
