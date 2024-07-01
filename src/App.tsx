import './App.css'
import { useCvContext } from '@context'
import { useEffect } from 'react'
import { TransitionAnimated, Header, VITE_DOC } from '@components'

export default function App () {
  const [ isShowing, set ] = useCvContext(s => s.isShowing)
  const [ isShowingDoc ] = useCvContext(s => s.isShowingDoc);

  useEffect(() => {
    setTimeout(() => set({ 'isShowing': true }), 1300)
  }, [])

  return <div className='bg-charlie-brown'>
    <Header />

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
  return <div className='flex items-center justify-center relative z-10'>
    cv
  </div>
}