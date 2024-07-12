import './App.css'
import { useEffect } from 'react'
import { useCvContext } from '@context'
import { Header } from '@components'
import { useHandleClouds } from '@hooks'
import { DocPage, CVpage } from '@pages'

export default function App () {
  const [ isShowing, set ] = useCvContext(s => s.isShowing)
  const [ isPrinting, ] = useCvContext(s => s.isPrinting)
  useHandleClouds()

  useEffect(() => {
    if (!isShowing) {
      const timer = setTimeout(() => set({ 'isShowing': true }), 1300)
      return () => clearTimeout(timer);
    }
  }, [ isShowing, set ])

  return <div className='bg-charlie-brown rounded-lg'>
    {!isPrinting && <Header />}

    <br />

    <CVpage />

    <DocPage />
  </div>
}
