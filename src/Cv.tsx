import {
  AnchorOpenWindow,
  Space,
  CoolHr,
  Heading,
  DCT,
  SmartCity,
  Appimotion,
  D33p,
} from '@components';
import { useMediaQuery } from '@hooks';


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

      {isLargeScreen && '| '}go to the portfolio: <Space />

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

      <AnchorOpenWindow /** @Inteia */
        className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
        title='Click para ir al Inteia.co'
        href='https://inteia.com.co/'
        text={<Heading
          text={<>
            FRONT-END DEVELOPER{!isLargeScreen && <br />}<Space />
            <span className='text-lg'>at INTEIA</span>
            <em className='text-lg -mb-7'>
              <b> 10/07/2022 ~ 8/07/2024</b>
            </em>
            <br />
          </>}
        />}
      />

      <div className='text-black dark:text-white/70'>
        I am happy with my time in INTEIA in which we have more than 5 applications to production.

        <D33p />

        <Appimotion />

        <DCT />

        <SmartCity />
      </div>

      <CoolHr className='mt-6 mb-6' />

      <Heading /** @Solo */
        text={<>
          SOLO DEVELOPER{!isLargeScreen && <br />}<Space />
          <em className='text-lg -mb-7'>
            <b>28/09/2021 ~ 2022</b>
          </em>
          <br />
        </>}
      />

      <div className='text-black dark:text-white/70'>
        I have worked on my own projects to strengthen my knowledge of development, frontend and backend, in my portfolio and others. With the aim of having projects to show in job interviews to be able to get my first job as developer, i've applied my design and automation knowledge, all my learning notes are in my GithHub profile.
      </div>

      <CoolHr className='mt-6 mb-6' />
    </div>
  </div>;
};
