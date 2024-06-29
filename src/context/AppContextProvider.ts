import { CombineComponents } from "./CombineComponents";
import { CvProvider } from "./providers.CvProvider";

export const providers = [
  /**
   * @example
   */
  CvProvider,
]

/**
 * APP Main Context
 */
export const AppContextProvider = CombineComponents(...providers)
AppContextProvider.displayName = 'AppContextProvider';
