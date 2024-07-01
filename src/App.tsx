import './App.css'
import { useCvContext } from '@context'
import { useEffect } from 'react'
import {
  Header
} from '@components'
import { useHandleClouds } from '@hooks'
import { DocPage, CVpage } from '@pages'

export default function App () {
  const [ , set ] = useCvContext(s => s.isShowing)
  useHandleClouds()

  useEffect(() => {
    setTimeout(() => set({ 'isShowing': true }), 1300)
  }, [])

  return <div className='bg-charlie-brown rounded-lg'>
    <Header />

    <br />

    <CVpage />

    <DocPage />
  </div>
}
