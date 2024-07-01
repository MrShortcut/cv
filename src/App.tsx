import './App.css'
import { useCvContext } from '@context'
import { useEffect } from 'react'
import {
  TransitionAnimated,
  Header,
  VITE_DOC
} from '@components'
import { useHandleClouds } from '@hooks'
import { Cv } from './Cv'

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

    <TransitionAnimated /* CvContainer */
      flag={isShowing && !isShowingDoc}
    >
      {!isShowingDoc && <Cv />}
    </TransitionAnimated>


    <TransitionAnimated /* doc */
      flag={isShowingDoc}
    >
      {isShowingDoc && <VITE_DOC />}
    </TransitionAnimated>
  </div>
}
