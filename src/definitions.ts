export enum Style {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
  CUSTOM = 'CUSTOM',
}

/**
 * Full HEX color format only (6 or 8 digits).
 * - 6 digits: #RRGGBB (e.g., #FFFFFF, #000000, #FF5733)
 * - 8 digits: #RRGGBBAA with alpha channel (e.g., #FFFFFF00, #FF5733CC)
 *
 * Note: Short 3-digit format (#FFF) is NOT supported.
 */
export type StatusBarColor = `#${string}`;

export enum StatusBarAnimation {
  NONE = 'none',
  FADE = 'fade',
  SLIDE = 'slide',
}

type StatusBarStyleNoDefaultOptions = {
  style: Style;
};

type StatusBarStyleOptions =
  | StatusBarStyleNoDefaultOptions
  | {
      style: Style.CUSTOM;
      color: StatusBarColor;
    };

export type StatusBarOptions = StatusBarStyleOptions;

export type StatusBarShowOptions = {
  animated: boolean;
};

export type StatusBarHideOptions = {
  animated: boolean;
};

export type StatusBarSetOverlaysWebViewOptions = {
  value: boolean;
};

export type StatusBarSetBackgroundOptions = {
  color: StatusBarColor;
};

export type SafeAreaInsets = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export interface CAPStatusBarPlugin {
  /**
   * Set the status bar and navigation bar style and color.
   * @param options - The options to set the status bar style and color.
   * @param options.style - The style of the status bar.
   * @param options.color - The color of the status bar.
   */
  setStyle(options: StatusBarOptions): Promise<void>;
  /**
   * Show the status bar.
   * @param options - The options to show the status bar.
   * @param options.animated - Whether to animate the status bar.
   */
  show(options: StatusBarShowOptions): Promise<void>;
  /**
   * Hide the status bar.
   * @param options - The options to hide the status bar.
   * @param options.animated - Whether to animate the status bar.
   */
  hide(options: StatusBarHideOptions): Promise<void>;
  /**
   * Set whether the status bar overlays the web view.
   * @param options - The options to set the status bar overlays web view.
   * @param options.value - Whether the status bar overlays the web view.
   */
  setOverlaysWebView(options: StatusBarSetOverlaysWebViewOptions): Promise<void>;
  /**
   * Set the window background color.
   * @param options - The options to set the window background color.
   * @param options.color - The background color in HEX format.
   */
  setBackground(options: StatusBarSetBackgroundOptions): Promise<void>;
  /**
   * Get the safe area insets.
   * Returns the insets for status bar, navigation bar, and notch areas.
   * Values are in pixels on Android and points on iOS.
   */
  getSafeAreaInsets(): Promise<SafeAreaInsets>;
}
