import { useLocalStorage } from '@uidotdev/usehooks';
import { Classes } from '@blueprintjs/core';
import { Theme } from '@/lib/types/theme';

export const useTheme = (
  init: Theme = 'light'
): [theme: { name: Theme; cssClasses: string }, toggleTheme: () => void] => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', init);
  const cssClasses: string = theme === 'light' ? '' : Classes.DARK;

  const toggleTheme = (): void => {
    setTheme((t) => (t === 'light' ? 'dark' : 'light'));
  };

  return [{ name: theme, cssClasses }, toggleTheme];
};
