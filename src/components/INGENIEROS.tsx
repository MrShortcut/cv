import { Space } from '@components';
import { useMediaQuery } from '@hooks';


export function INGENIEROS () {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  return <>
    <br />
    - Resident engineer{!isLargeScreen && ':'}
    {!isLargeScreen && <br />}<Space />at
    <Space />
    <span className='text-black dark:text-white'>INGENIEROS GF S.A.S</span>
    <Space />
    <em className='text-lg -mb-7'>
      <b> 06/03/17 ~ 05/04/18: </b>
    </em>
    Resident of road work, supervision of operation, excavation transport and conformation of rocky material.
  </>;
}
