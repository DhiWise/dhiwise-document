---
sidebar_position: 1
---


# Custom Components and Styling

## **Custom components**

DhiWise **auto-detects** custom components in your app design. It lets you **customise** and **style** components as per your needs and choice.

It offers different properties for which you can set parameters and use them for your app later. Below are the supported properties for custom components:

| Type | Description |
| --- | --- |
| **Shape** | Add different shapes for a component |
| **Padding** | Add different padding values |
| **Variant** | Manage different variants for a component |
| **FontStyle** | Add different styles for fonts for a component |

:::note
DhiWise manages custom components in your app and helps in removing redundant code, which results in quality code.
:::

You can add these properties in your component and add different values to it and use them whenever required as per your designing requirements.

**Supported components:** <a href="/docs/flutter/ui-customisation/supported-widgets#button">Button</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#textfield">EditText</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#floatingtextfield">FloatingEditText</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#searchview">SearchView</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#dropdown">Dropdown</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#radio">Radio</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#checkbox">Checkbox</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#floatingactionbutton">FloatingActionButton</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#iconbutton">IconButton</a>, <a href="/docs/flutter/ui-customisation/supported-widgets#switch">Switch</a>.

## **Styling**

Styling is used to manage the theme of an app. Styling includes the app’s colors, fonts and images used in it. In Styling, you can add, edit or view all your app’s colors, fonts and images easily.  

Go to dashboard and select a **screen** or a **page**, on the top-left, there are tabs namely **UI file**, **Component**, and **Styling**.

Select **Styling**, all the **colours**, **fonts**, and **assets** being used in the app will be listed category-wise.

### Colors

In colors you can see all the colors used in the app, with their **Name**, **Primary theme**, and **Dark** **theme**. Under the theme, the color which is set with its color code in **hex value** and **opacity** is mentioned. 

By clicking on the color, a picker opens, from which you can change color, see its color format(RGB, HSV, HSL) with each value, and Hex color code.


:::info
Supported color formats RGB, HSV, and HSL.
:::


<!-- ![Example banner](../img/button.png) -->

### Fonts

Here all your app's fonts are listed with their **Name**, **Weight**, **Style**, and **Type**. You can also **Upload custom fonts**.

<!-- ![Example banner](../img/button.png) -->

### Assets

All images used in the app are shown here with their **Name** and **Type**, you can **Add new assets** or **Replace** an existing one by modifying them.

<!-- ![Example banner](../img/button.png) -->


For Image, it will auto-identify the image according to its <a href="https://api.flutter.dev/flutter/widgets/Image-class.html" target="_blank">constructor's type</a> as per the Flutter image class, i.e. whether it is network image or file or an asset.


### Strings

All the strings of the app are listed here, from which you can modify its value and see all the constant keys being set or also can add a new string right here from the Styling section in String. 

:::info
A string constant file will be generated with all this strings in the app’s code under localization folder.
:::


<!-- ![Example banner](../img/button.png) -->

<!-- #### Code View -->


<!-- ![Example banner](../img/button.png) -->