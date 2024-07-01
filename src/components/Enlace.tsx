import { Space } from '@components';
import { useMediaQuery } from '@hooks';

export function Enlace () {
  const isLargeScreen = useMediaQuery('(min-width: 768px)');

  return <>
    <br />
    - Hardware and software technician{!isLargeScreen && ':'}
    {!isLargeScreen && <br />}<Space />at
    <Space />
    <span className='text-black dark:text-white'> ENLACE </span>
    <Space />
    <em className='text-lg -mb-7'>
      <b>08/2016 ~ 01/2017</b>
    </em>
    <Space />
    Equipment inventory (Hardware) and equipment maintenance (Hardware), cleaning, formatting, installation of software in the field. Remote delivery of reports. Servicios de Tecnologías de Información y comunicaciones -TIC
  </>;
}
