import './App.css'
import { useCvContext } from '@context'
import { useEffect } from 'react'
import { TransitionAnimated, Header, VITE_DOC } from '@components'
import { useHandleClouds } from '@hooks'

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
  return <div className='flex justify-start relative z-10'>
    <h1 className='font-heading text-2xl md:text-heading font-black hover:text-[#e56952]'>RODRIGO A. MORENO P.</h1>
  </div>
}