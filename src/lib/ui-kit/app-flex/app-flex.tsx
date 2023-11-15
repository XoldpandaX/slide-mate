import { FC, JSX, PropsWithChildren } from 'react';
import { Flex, FlexProps } from 'antd';

/**
 * Component API
 * https://ant.design/components/flex#api
 *
 * Component description
 * https://ant.design/components/flex
 */
export interface AppFlexProps extends FlexProps {}

const AppFlex: FC<PropsWithChildren<AppFlexProps>> = (props): JSX.Element => {
  const { children, ...restProps } = props;
  return <Flex {...restProps}>{children}</Flex>;
};

export default AppFlex;
