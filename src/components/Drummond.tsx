import { Space } from '@components';
import { useMediaQuery } from '@hooks';



export function Drummond () {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');
  return <>
    <br />
    - Supervisor Assistant{!isLargeScreen && ':'}
    {!isLargeScreen && <br />}<Space />at
    <Space />
    <span className='text-black dark:text-white'> DRUMMOND LTD</span>
    <Space />
    <em className='text-lg -mb-7'>
      <b>03/10/2018 ~ 03/10/2020: </b>
    </em>
    Supervision of mining equipment, mining operation, dumps and backfill. Pribbenow Mine, in parallel, risk and hazard measurement was carried out on members of the organization.
  </>;
}
