import './App.css'
import { useCvContext } from '@context'
import { useEffect } from 'react'
import {
  TransitionAnimated,
  Header,
  VITE_DOC,
  AnchorOpenWindow,
  Space
} from '@components'
import { useHandleClouds, useMediaQuery } from '@hooks'

export default function App () {
  const [ isShowing, set ] = useCvContext(s => s.isShowing)
  const [ isShowingDoc ] = useCvContext(s => s.isShowingDoc);
  useHandleClouds()


  useEffect(() => {
    setTimeout(() => set({ 'isShowing': true }), 1300)
  }, [])

  return <div className='bg-charlie-brown'>
    <Header />
    <br />

    {/* CvContainer */}
    <TransitionAnimated flag={isShowing && !isShowingDoc}>
      {!isShowingDoc && <Cv />}
    </TransitionAnimated>


    <TransitionAnimated flag={isShowingDoc}>
      {isShowingDoc && <VITE_DOC />}
    </TransitionAnimated>
  </div>
}

export const Cv = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  return <div className='text-left z-10 relative mt-2'>
    <h1 className='relative font-heading text-2xl md:text-heading font-black hover:text-[#e56952]'>
      RODRIGO A. MORENO P.
    </h1>

    <div className='mt-2 font-heading text-lg mt-4 md:mt-6'>
      <strong>Frontend developer</strong> | Colombia
      {!isLargeScreen && <> <br /></>}
      <Space />
      {isLargeScreen && '| '}rmresidente@gmail.com
      <Space />
      {!isLargeScreen && <> <br /> </>}
      <Space />
      {isLargeScreen && '| '}portafolio: <Space />
      <AnchorOpenWindow
        title='Click para ir al portafolio'
        href='https://rroderickk.github.io/Deploy_library/'
        text='Deploy Library'
        className='font-black dark:text-white/60 mb-4 hover:text-purple-800 dark:hover:text-purple-500'
      />
    </div>
  </div>
}
