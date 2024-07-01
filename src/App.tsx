import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Test } from '@pages'
import { useCvContext } from '@context'
import { DefaultButton, ThemeToggle } from '@components'
import { cx } from './utilities'
import { Transition } from '@headlessui/react'
import { useEffect } from 'react'

export default function App () {
  const [ cheatMode ] = useCvContext(s => s.cheatMode)
  const [ isShowing, set ] = useCvContext(s => s.isShowing)

  useEffect(() => {
    setTimeout(() => {
      set({ 'isShowing': true })
    }, 1300)
  }, [])

  return <>
    <Transition show={isShowing}>
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
          onClick={undefined}
        />

        <DefaultButton
          text='Imprimir'
          onClick={undefined}
        />
      </div>
    </Transition>

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
        <div className='text-black dark:text-white'>{cheatMode}</div>
        <Test />

        <div className='flex items-center justify-center relative z-10'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src={viteLogo} className='logo' alt='Vite logo' />
          </a>
          <a href='https://react.dev' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </Transition>
  </>
}

