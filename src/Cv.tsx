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
    </div>
  </div>;
};


