import { FC, JSX } from 'react';
import { Flash, Moon } from '@blueprintjs/icons';
import { SVGIconProps } from '@blueprintjs/icons/src/svgIconProps';

export type IconName = 'Flash' | 'Moon';
export interface AppIconProps {
  name: IconName;
  className?: string;
}

const AppIcon: FC<AppIconProps> = (props): JSX.Element => {
  const { name, className } = props;
  const iconProps = { className };
  const Icon = getIconByName(name);

  return <Icon {...iconProps} />;
};

function getIconByName(name: IconName): FC<SVGIconProps> {
  const icons: Record<IconName, FC<SVGIconProps>> = {
    Flash,
    Moon,
  };

  return icons[name];
}

export default AppIcon;
