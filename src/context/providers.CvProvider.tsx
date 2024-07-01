import CreateFastContext from "./CreateFastContext";

/** The important thing it's @example */
export const {
  Provider: CvProvider,
  useStore: useCvContext
} = CreateFastContext({
  cheatMode: '@CheatModes4',
  isDarkMode: false,
  isShowing: false,
  isShowingDoc: false,
  isShowingClouds: true,
  isShowD33p: false,
  isShowAppi: false,
  isShowDCT: false,
  isShowSmartCity: false,
  isPrinting: false,
})

