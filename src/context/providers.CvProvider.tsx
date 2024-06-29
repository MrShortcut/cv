import CreateFastContext from "./CreateFastContext";

/** The important thing it's @example */
export const {
  Provider: CvProvider,
  useStore: useCvContext
} = CreateFastContext({
  cheat: '@CheatModes',
  isDarkMode: true,
})

