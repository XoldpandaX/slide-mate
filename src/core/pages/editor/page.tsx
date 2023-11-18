import { FC } from 'react';
import { ThemeColors } from '@/lib/ui-kit';
import { useTheme } from '@/core/hooks/use-theme';
import { Editor } from '@/modules/editor';

const EditorPage: FC = () => {
  const [{ name: theme }, toggleTheme] = useTheme('light');

  return (
    <Editor
      themeColors={ThemeColors}
      theme={theme}
      onThemeChange={toggleTheme}
    />
  );
};

export default EditorPage;
