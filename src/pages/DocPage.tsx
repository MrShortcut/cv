import { useCvContext } from '@context';
import { TransitionAnimated, VITE_DOC } from '@components';

export function DocPage () {
  const [ isShowingDoc ] = useCvContext(s => s.isShowingDoc);

  return <TransitionAnimated /* doc */
    flag={isShowingDoc}
  >
    {isShowingDoc && <VITE_DOC />}
  </TransitionAnimated>;
}
