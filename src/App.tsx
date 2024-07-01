import './App.css'
import { useCvContext } from '@context'
import { useEffect } from 'react'
import {
  TransitionAnimated,
  Header,
  VITE_DOC,
  AnchorOpenWindow,
  Space,
  CoolHr,
  Heading
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

export const Cv = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  return <div className='text-left z-10 relative mt-2'>
    <h1 className='relative font-heading text-2xl md:text-heading font-black hover:text-[#e56952]'>
      RODRIGO A. MORENO P.
    </h1>

    <div className='font-heading text-lg mt-4 md:mt-6'>
      <strong className='text-[#000] dark:text-[#fff]'>Front-end developer</strong> | Colombia

      {!isLargeScreen && <> <br /></>}

      <Space />

      {isLargeScreen && '| '}rmresidente@gmail.com

      <Space />

      {!isLargeScreen && <> <br /> </>}

      <Space />

      {isLargeScreen && '| '}portfolio: <Space />

      <AnchorOpenWindow
        title='Click para ir al portafolio'
        href='https://rroderickk.github.io/Deploy_library/'
        text='Deploy Library'
        className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
      />

      <CoolHr className='mt-6 mb-6' />

      <Heading text='SKILLS' />

      <div className='text-black dark:text-white/70'>
        <p className='tracking-wide font-bold font-arial text-sm [word-spacing:13px]'>
          Front-end Javascript, ES6+, React.js.ts, HTML5, CSS3+, SCSS, Tailwind, AgGridReact,
          ChakraUI, Next, Webpack<br />
          Back-end Node.js.ts, Nest.ts, Python <br />
          Others Powershell, Tradingview PineScript V5, Azure, Git, React Native, Lua, Neovim, Github pages
        </p>
        <p className='my-2 text-black dark:text-white'>
          # Active current learning Typescript | PineScriptV5 | Powershell
        </p>

        <p>
          Solid front-end knowledge of React, ES6+, Javascript, Typescript, understanding of design principles, UI/UX, advanced CSS (CSS Modules, Scss, Tailwind, Chakra-UI, Styled-components), and responsive design. Positive attitude, strong work ethic, a drive for results while focusing on high code quality and performance.
        </p>
      </div>

      <CoolHr className='mt-6 mb-6' />

      <Heading text='SOLO DEVELOPER' />
    </div>
  </div>
}