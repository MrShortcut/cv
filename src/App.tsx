import './App.css'
import { useCvContext } from '@context'
import { cx } from '@utilities'
import { Transition } from '@headlessui/react'
import { useEffect } from 'react'
import { Header, VITE_DOC } from '@components'

export default function App () {
  const [ isShowing, set ] = useCvContext(s => s.isShowing)
  const [ isShowingDoc ] = useCvContext(s => s.isShowingDoc);

  useEffect(() => {
    setTimeout(() => set({ 'isShowing': true }), 1300)
  }, [])

  return <div className='bg-charlie-brown'>
    <Header />

    {/* CvContainer */}
    <Transition show={isShowing}>
      <div
        className={cx(
          'mt-8',
          'size-full rounded-xl transition duration-[400ms]',
          'data-[closed]:translate-y-10 data-[closed]:opacity-0',
          'data-[leave]:duration-[400ms] data-[leave]:ease-in-out',
          'data-[leave]:data-[closed]:translate-y-0'
        )}
      >
        {isShowingDoc && <VITE_DOC />}
        {!isShowingDoc && <Cv />}
      </div>
    </Transition>
  </div>
}

export const Cv = () => {
  return <div className='flex items-center justify-center relative z-10'>
    cv
  </div>
}