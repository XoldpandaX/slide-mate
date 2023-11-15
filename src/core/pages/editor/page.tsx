import { FC } from 'react';
import { useTheme } from '@/core/hooks/use-theme';
import { Editor } from '@/modules/editor';

const EditorPage: FC = () => {
  const [{ name: theme }, toggleTheme] = useTheme('light');

  return (
    <div>
      <Editor
        theme={theme}
        onThemeChange={toggleTheme}
      />
    </div>
  );
};

export default EditorPage;
