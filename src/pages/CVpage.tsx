import { useCvContext } from '@context';
import { TransitionAnimated } from '@components';
import { Cv } from '@components';


export function CVpage () {
  const [ isShowing ] = useCvContext(s => s.isShowing);
  const [ isShowingDoc ] = useCvContext(s => s.isShowingDoc);
  return <TransitionAnimated /* CvContainer */
    flag={isShowing && !isShowingDoc}
  >
    {!isShowingDoc && <Cv />}
  </TransitionAnimated>;
}
