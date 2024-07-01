import { useEffect } from 'react';
import { useCvContext } from '@context';
import { Switch } from '@headlessui/react'
export const ThemeToggle = () => {
  const [ isDarkMode, setIsDarkMode ] = useCvContext(s => s.isDarkMode);
  useThemeToggleEffect();

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    }
    setIsDarkMode({ 'isDarkMode': !isDarkMode });
  };

  return <Switch
    title={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    checked={isDarkMode}
    onChange={toggleTheme}
    className='scale-[90%] md:scale-100  group relative flex h-7 w-14 md:h-7 md:w-14 cursor-pointer rounded-full bg-lightWhite dark:bg-ligthDark p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10'
  >
    <span
      aria-hidden='true'
      className='pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white dark:bg-slate-700 ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7'
    >
      {isDarkMode ?
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5 text-black/80 group-hover:text-black'>
          <path fillRule='evenodd' d='M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z' clipRule='evenodd' />
        </svg>
        : <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='size-5 text-black/20 group-hover:text-black/40'>
          <path d='M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z' />
        </svg>}
    </span>
  </Switch>
};

export function useThemeToggleEffect () {
  const [ , setIsDarkMode ] = useCvContext(s => s.isDarkMode);
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode({ 'isDarkMode': true });
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode({ 'isDarkMode': false });
    }
  }, []);
}
