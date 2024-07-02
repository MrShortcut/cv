import { useCvContext } from '@context';
import { AnchorOpenWindow } from '@components';
import { cx } from '@utilities';
import appi from '@assets/appimotion.png'


export function Appimotion () {
  const [ isShowAppi, set ] = useCvContext(s => s.isShowAppi);

  return <>
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
    <small className='ml-1 text-black dark:text-white'>React.js, MaterialUI.</small>

    {isShowAppi && <AnchorOpenWindow
      className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
      title='Click para ir a Appimotion.com'
      href='https://www.appimotion.com'
      text={<img src={appi} alt='d33p landing page' />} />}
  </>;
}
