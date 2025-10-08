# cap-status-bar

Capacitor status bar

## Install

```bash
npm install cap-status-bar
npx cap sync
```

## Configuration

### iOS

For the `show()` and `hide()` methods to work on iOS, you need to configure your app's `Info.plist`:

1. Open `ios/App/App/Info.plist`
2. Add or modify the following key:

```xml
<key>UIViewControllerBasedStatusBarAppearance</key>
<false/>
```

**Note:** Starting with iOS 13, Apple deprecated the application-level status bar control API in favor of view controller-based appearance. Setting `UIViewControllerBasedStatusBarAppearance` to `false` allows this plugin to control the status bar programmatically. This is the recommended approach for Capacitor plugins.

### Android

No additional configuration required. The plugin works out of the box on Android.

## API

<docgen-index>

* [`setStyle(...)`](#setstyle)
* [`show(...)`](#show)
* [`hide(...)`](#hide)
* [`setOverlaysWebView(...)`](#setoverlayswebview)
* [`setBackground(...)`](#setbackground)
* [`getSafeAreaInsets()`](#getsafeareainsets)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setStyle(...)

```typescript
setStyle(options: StatusBarOptions) => Promise<void>
```

Set the status bar and navigation bar style and color.

| Param         | Type                                                                    | Description                                          |
| ------------- | ----------------------------------------------------------------------- | ---------------------------------------------------- |
| **`options`** | <code><a href="#statusbarstyleoptions">StatusBarStyleOptions</a></code> | - The options to set the status bar style and color. |

--------------------


### show(...)

```typescript
show(options: StatusBarShowOptions) => Promise<void>
```

Show the status bar.

| Param         | Type                                                                  | Description                           |
| ------------- | --------------------------------------------------------------------- | ------------------------------------- |
| **`options`** | <code><a href="#statusbarshowoptions">StatusBarShowOptions</a></code> | - The options to show the status bar. |

--------------------


### hide(...)

```typescript
hide(options: StatusBarHideOptions) => Promise<void>
```

Hide the status bar.

| Param         | Type                                                                  | Description                           |
| ------------- | --------------------------------------------------------------------- | ------------------------------------- |
| **`options`** | <code><a href="#statusbarhideoptions">StatusBarHideOptions</a></code> | - The options to hide the status bar. |

--------------------


### setOverlaysWebView(...)

```typescript
setOverlaysWebView(options: StatusBarSetOverlaysWebViewOptions) => Promise<void>
```

Set whether the status bar overlays the web view.

| Param         | Type                                                                                              | Description                                            |
| ------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| **`options`** | <code><a href="#statusbarsetoverlayswebviewoptions">StatusBarSetOverlaysWebViewOptions</a></code> | - The options to set the status bar overlays web view. |

--------------------


### setBackground(...)

```typescript
setBackground(options: StatusBarSetBackgroundOptions) => Promise<void>
```

Set the window background color.

| Param         | Type                                                                                    | Description                                       |
| ------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#statusbarsetbackgroundoptions">StatusBarSetBackgroundOptions</a></code> | - The options to set the window background color. |

--------------------


### getSafeAreaInsets()

```typescript
getSafeAreaInsets() => Promise<SafeAreaInsets>
```

Get the safe area insets.
Returns the insets for status bar, navigation bar, and notch areas.
Values are in pixels on Android and points on iOS.

**Returns:** <code>Promise&lt;<a href="#safeareainsets">SafeAreaInsets</a>&gt;</code>

--------------------


### Type Aliases


#### StatusBarOptions

<code><a href="#statusbarstyleoptions">StatusBarStyleOptions</a></code>


#### StatusBarStyleOptions

<code><a href="#statusbarstylenodefaultoptions">StatusBarStyleNoDefaultOptions</a> | { style: <a href="#style">Style.CUSTOM</a>; color: <a href="#statusbarcolor">StatusBarColor</a>; }</code>


#### StatusBarStyleNoDefaultOptions

<code>{ style: <a href="#style">Style</a>; }</code>


#### StatusBarColor

Full HEX color format only (6 or 8 digits).
- 6 digits: #RRGGBB (e.g., #FFFFFF, #000000, #FF5733)
- 8 digits: #RRGGBBAA with alpha channel (e.g., #FFFFFF00, #FF5733CC)

Note: Short 3-digit format (#FFF) is NOT supported.

<code>`#${string}`</code>


#### StatusBarShowOptions

<code>{ animated: boolean; }</code>


#### StatusBarHideOptions

<code>{ animated: boolean; }</code>


#### StatusBarSetOverlaysWebViewOptions

<code>{ value: boolean; }</code>


#### StatusBarSetBackgroundOptions

<code>{ color: <a href="#statusbarcolor">StatusBarColor</a>; }</code>


#### SafeAreaInsets

<code>{ top: number; bottom: number; left: number; right: number; }</code>


### Enums


#### Style

| Members      | Value                 |
| ------------ | --------------------- |
| **`LIGHT`**  | <code>'LIGHT'</code>  |
| **`DARK`**   | <code>'DARK'</code>   |
| **`CUSTOM`** | <code>'CUSTOM'</code> |

</docgen-api>
