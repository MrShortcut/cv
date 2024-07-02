import {
  AnchorOpenWindow,
  Space,
  CoolHr,
  Heading,
  DCT,
  SmartCity,
  Appimotion,
  D33p,
  Skills,
  Drummond,
  INGENIEROS,
  Enlace,
} from '@components';
import { useMediaQuery } from '@hooks';
import { useCvContext } from '@context';


export const Cv = () => {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  const [ isPrinting, ] = useCvContext(s => s.isPrinting)

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

      <Skills />

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
        I have worked on my own projects to strengthen my knowledge of development, frontend and backend, in my portfolio and others. With the aim of having projects to show in job interviews to be able to get my first job as developer, i've applied my design and automation knowledge, all my learning notes are in my
        <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Click para ir a perfil de github'
          href='https://github.com/rroderickk'
          text=' GithHub profile student.'
        />
      </div>

      <CoolHr className='mt-6 mb-6' />

      <Heading /** @Education */
        text={<>
          EDUCATION{!isLargeScreen && <br />}<Space />
          <em className='text-lg -mb-7'>
            <b>28/09/2021 ~ today</b>
          </em>
          <br />
        </>}
      />

      <div className='text-black dark:text-white/70'>
        At the moment Self-taught with 13+ certificates of completion, Platzi & Others platforms | React.js | Node.js | Python | Typescript | Typescript Advanced | Closures and scope Javascript | CSS3 | SCSS | Javascript | ES6+ | OOP | Node | Nest | Next | Webpack | SPa | Effective time management | Responsive design: mobile first | SOFTWARE ENGINEERING FUNDAMENTALS.
      </div>

      <CoolHr className='mt-6 mb-6' />

      <Heading /** @SideCarreer */
        text={<>
          SIDE CARRER{!isLargeScreen && <br />}<Space />
          <em className='text-lg -mb-7'>
            <b>06/2009 ~ 10/2016</b>
          </em>
          <br />
        </>}
      />

      <div className='text-black dark:text-white/70'>
        Mining engineer specializing in road geotechnics. View more in <Space/>
        <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Linkedin Rodrigo Moreno'
          href='https://linkedin.com/in/rodrigo-moreno-rr'
          text='Linkedin.'
        />

        <Drummond />

        <INGENIEROS />

        <Enlace />
      </div>

      <CoolHr className='mt-6 mb-6' />

      {!isPrinting && <div className='flex gap-2 justify-between -mb-44'>
        <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Github Rodrigo Moreno estudiante'
          href='https://github.com/rroderickk'
          text={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className='fill-black/60 dark:fill-white/60'
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          }
        />

        <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='keep simple web'
          href='https://keepsimpleweb.github.io'
          text='keepsimpleweb.com'
        />

        <AnchorOpenWindow
          className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
          title='Github Rodrigo Moreno profesional'
          href='https://github.com/MrShortcut'
          text={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              className='fill-black dark:fill-white'
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          }
        />
      </div>}
    </div>
  </div>;
};


