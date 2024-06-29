import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Test } from '@pages'
import { useCvContext } from '@context'
import { ThemeToggle } from '@components'
export default function App () {
  const [ cheat ] = useCvContext(s => s.cheat)
  return <div>
    <ThemeToggle />

    <Test />
    {cheat}

    <div className='flex items-center justify-center relative z-10'>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
      <p>
        Edit <code>src/App.tsx</code> and save to test HMR
      </p>
    </div>
    <p className="read-the-docs">
      Click on the Vite and React logos to learn more
    </p>
  </div>
}

