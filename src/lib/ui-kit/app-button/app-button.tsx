import { FC, JSX, PropsWithChildren, ButtonHTMLAttributes } from 'react';
import { Button } from '@blueprintjs/core';

interface AppButtonPropsBase {
  onClick: () => void;
  fill?: boolean;
  minimal?: boolean;
}

export type AppButtonProps = AppButtonPropsBase &
  Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'title'>;

const AppButton: FC<PropsWithChildren<AppButtonProps>> = (props): JSX.Element => {
  const { children, ...restProps } = props;
  return <Button {...restProps}>{children}</Button>;
};

export default AppButton;
