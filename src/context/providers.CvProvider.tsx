import CreateFastContext from "./CreateFastContext";

/** The important thing it's @example */
export const {
  Provider: CvProvider,
  useStore: useCvContext
} = CreateFastContext({
  cheatMode: '@CheatModes4',
  isDarkMode: false,
  isShowing: false,
})

