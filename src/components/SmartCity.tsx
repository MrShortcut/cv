import { useCvContext } from '@context';
import { AnchorOpenWindow } from '@components';
import { cx } from '@utilities';
import sm from '@assets/sm.png'


export function SmartCity () {
  const [ isShowSmartCity, set ] = useCvContext(s => s.isShowSmartCity);

  return <>
    <br />
    <em /** @SmartCity */
      title='hover para previsualizar SmartCity'
      onMouseEnter={() => set({ 'isShowSmartCity': !isShowSmartCity })}
      className={cx(
        'ml-2 dark:text-white font-semibold',
        isShowSmartCity && 'text-salmon'
      )}
    > - SmartCity: </em>
    It is INTEIA's most ambitious project, collects all previous applications already created for smart cities.
    <small className='ml-1 text-black dark:text-white'>
      React.ts, Tailwind, Redux-toolkit, Redux toolkit query, TanStack Query.
    </small>

    {isShowSmartCity && <AnchorOpenWindow
      className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
      title='Click para ir a SmartCity'
      href='https://smartcity.z20.web.core.windows.net'
      text={<img src={sm} alt='Smartcity' />} />}
  </>;
}
