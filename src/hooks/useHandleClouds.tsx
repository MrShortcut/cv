import { useCvContext } from '@context';
import { useEffect } from 'react';


export function useHandleClouds () {
  const [ isShowingClouds ] = useCvContext(s => s.isShowingClouds);

  useEffect(() => {
    const cloud = document.querySelector('#cloud') as HTMLElement;
    if (cloud) {
      cloud.style.opacity = isShowingClouds ? '1' : '0';
    }
  }, [ isShowingClouds ]);
}
