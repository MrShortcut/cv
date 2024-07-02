import { useCvContext } from '@context';
import { AnchorOpenWindow } from '@components';
import { cx } from '@utilities';
import deep from '@assets/d33p.png'


export function D33p () {
  const [ isShowD33p, set ] = useCvContext(s => s.isShowD33p);

  return <>
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
    <small className='ml-1 text-black dark:text-white'>React.js 2019, MaterialUI.</small>

    {isShowD33p && <AnchorOpenWindow
      className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
      title='Click para ir al D33p landing'
      href='https://deeplandingpagestaeus2sa.z20.web.core.windows.net'
      text={<img src={deep} alt='d33p landing page' />} />}
  </>;
}
