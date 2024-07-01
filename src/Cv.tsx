import { useCvContext } from '@context';
import {
  AnchorOpenWindow,
  Space,
  CoolHr,
  Heading
} from '@components';
import { useMediaQuery } from '@hooks';
import { cx } from '@utilities';


export const Cv = () => {
  const [ isShowD33p, set ] = useCvContext(s => s.isShowD33p);
  const [ isShowAppi ] = useCvContext(s => s.isShowAppi);
  const [ isShowDCT ] = useCvContext(s => s.isShowDCT);

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
            <em className='text-lg -mb-7'>
              <b>10/07/2022 ~ 8/07/2024</b>
            </em>
            <br />
          </>}
        />}
      />

      <div className='text-black dark:text-white/70'>
        I am happy with my time in INTEIA in which we have more than 5 applications to production.
        <br />

        <em /** @D33p */
          title='hover para previsualizar d33p landing'
          onMouseEnter={() => set({ 'isShowD33p': !isShowD33p })}
          className={cx(
            'ml-2 dark:text-white font-semibold',
            isShowD33p && 'text-salmon'
          )}
        > - D33P landing page and dashboard: </em>
        D33P automates capacity processes, detection, classification, and monitoring of road actors, by means (Deep Learning and Artificial Intelligence) and computer vision (image analytics).

        {isShowD33p && <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Click para ir al D33p landing'
          href='https://deeplandingpagestaeus2sa.z20.web.core.windows.net'
          text={
            <img src='/src/assets/d33p.png' alt='d33p landing page' />
          }
        />}

        <br />

        <em /** @Appi */
          title='hover para previsualizar Appimotion landing'
          onMouseEnter={() => set({ 'isShowAppi': !isShowAppi })}
          className={cx(
            'ml-2 dark:text-white font-semibold',
            isShowAppi && 'text-salmon'
          )}
        > - Appimotion landing page and dashboard: </em>
        Appimotion is an agile and practical application for you to efficient and monitor mobility in your organization.

        {isShowAppi && <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Click para ir a Appimotion.com'
          href='https://www.appimotion.com'
          text={
            <img src='/src/assets/appimotion.png' alt='d33p landing page' />
          }
        />}
        <br />

        <em /** @DCT */
          title='hover para previsualizar DCT'
          onMouseEnter={() => set({ 'isShowDCT': !isShowDCT })}
          className={cx(
            'ml-2 dark:text-white font-semibold',
            isShowDCT && 'text-salmon'
          )}
        > - DCT Foundation design </em>
        Appimotion is an agile and practical application for you to efficient and monitor mobility in your organization.

        {isShowDCT && <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Click para ir a DCT'
          href='https://cimentacionesstorageeus.z20.web.core.windows.net'
          text={
            <img src='/src/assets/dct.png' alt='DCT diseño de cimentaciones' />
          }
        />}
      </div>

      <CoolHr className='mt-6 mb-6' />

      <Heading /** @Solo */
        text={<>
          SOLO DEVELOPER{!isLargeScreen && <br />}<Space />
          <em className='text-lg -mb-7'>
            INTEIA (una empresa ISA) | <b>28/09/2021 ~ 2022</b>
          </em>
          <br />
        </>} />

      <div className='text-black dark:text-white/70'>
        I have worked on my own projects to strengthen my knowledge of development, frontend and backend, in my portfolio and others. With the aim of having projects to show in job interviews to be able to get my first job as developer, i've applied my design and automation knowledge, all my learning notes are in my GithHub profile.
      </div>

      <CoolHr className='mt-6 mb-6' />
    </div>
  </div>;
};
