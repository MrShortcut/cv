import { useCvContext } from '@context';
import { AnchorOpenWindow } from '@components';
import { cx } from '@utilities';

export function DCT () {
  const [ isShowDCT, set ] = useCvContext(s => s.isShowDCT);
  return <>
    <br />
    <em /** @DCT */
      title='hover para previsualizar DCT'
      onMouseEnter={() => set({ 'isShowDCT': !isShowDCT })}
      className={cx(
        'ml-2 dark:text-white font-semibold',
        isShowDCT && 'text-salmon'
      )}
    > - DCT Foundation design: </em>
    Foundations Design is an application for analytics, calculation and compilation of design data and costs for energy towers foundations.

    {isShowDCT && <AnchorOpenWindow
      className='text-[#000] font-black dark:text-[#fff] mb-4 hover:text-purple-800 dark:hover:text-purple-500'
      title='Click para ir a DCT'
      href='https://cimentacionesstorageeus.z20.web.core.windows.net'
      text={<img src='/src/assets/dct.png' alt='DCT diseño de cimentaciones' />} />}
  </>;
}
