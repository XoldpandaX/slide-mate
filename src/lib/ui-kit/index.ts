import { Colors, FocusStyleManager } from '@blueprintjs/core';

/**
 * Do some stuff before use ui-kit components based on blueprintjs library
 */
export const initUiKit = (): void => {
  /**
   * https://blueprintjs.com/docs/#core/accessibility.focus-management
   */
  FocusStyleManager.onlyShowFocusOnTabs();
};

export const ThemeColors = {
  dark: Colors.BLACK,
  light: Colors.WHITE,
};

export { default as AppButton, type AppButtonProps } from './app-button/app-button';
export { default as AppButtonIcon, type AppButtonIconProps } from './app-button/app-button-icon';
export { default as AppIcon, type AppIconProps } from './app-icon/app-icon';
export { default as AppSidebar, type AppSidebarProps } from './app-sidebar/app-sidebar';
export { default as AppFlex, type AppFlexProps } from './app-flex/app-flex';
