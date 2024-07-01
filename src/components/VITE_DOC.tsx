import reactLogo from '../assets/react.svg';
import { AnchorOpenWindow } from './AnchorOpenWindow';
import { Space } from './Space';
import viteLogo from '/vite.svg';
import { useCvContext } from '@context';

export const VITE_DOC = () => {
  const [ cheatMode ] = useCvContext(s => s.cheatMode);

  const MadeByME = <> <Space />Made by {cheatMode} <Space />using: </>;

  return <>
    <AnchorOpenWindow
      title='Click para ir a x.com/@CheatModes4'
      href='https://twitter.com/cheatmodes4'
      text={MadeByME}
      className='text-dark dark:text-white/60 mb-4 hover:text-purple-800 dark:hover:text-purple-500'
    />

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
  </>;
};

