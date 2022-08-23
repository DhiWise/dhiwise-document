---
sidebar_position: 5
---

# Tagging components in Figma

DhiWise auto-identifies all your screen view components and generates a complete code for the same. Generally, it auto-detects the components, but sometimes due to design changes, it may not able to identify them. 

To get the component identified in Figma, you can do the following things;

1. Refer to the <a href="/docs/Designguidelines/intro">design guidelines</a> or <a href="/docs/Designguidelines/component-specific-guidelines/">component-specific guidelines</a> which should be followed while screen designing in Figma. 

2. **Tag a specific component** in Figma and get it auto-identified in DhiWise.


:::tip
Change the view of the misidentified component to the correct one in DhiWise.  For Flutter <a href="/docs/flutter/change-widget">learn here</a>, and for React <a href="/docs/react/change-view">learn here</a>.
:::

**Tagging components** in Figma helps in auto-identifying components in the screen design easily when they are not auto-identified. Tag a component if it seems to be complex or you want to get it correctly identified in DhiWise. 

Before tagging a component, follow the below guides to set a tag on a component:

## **Guidelines to follow before tagging** 
In Figma design, the components which are placed in screen design must be placed in a proper <a href="https://help.figma.com/hc/en-us/articles/360039832054-Frames-and-Groups#h_a4b01a8f-859e-4478-a2af-4a2b802701a3">Group</a>. To learn about the grouping guidelines follow the <a href="/docs/Designguidelines/generalGuidelines/group-components-and-layers">Group components and layers</a> guidelines.

Proper **grouping** and **layering** of design elements will help in tagging a component easily, which will accurately help in identifying the component in DhiWise.

Follow the below guidelines to learn how to tag a component in Figma:

## **How to set a tag in Figma**

In your app’s Figma file, go to the screen in which you want to set a tag on the component.

Select the <a href="https://help.figma.com/hc/en-us/articles/360039832054-Frames-and-Groups#h_a4b01a8f-859e-4478-a2af-4a2b802701a3">Group</a> or <a href="https://help.figma.com/hc/en-us/articles/360041539473-Frames-in-Figma">Frame</a> of that particular component from the left sidebar of the Figma panel in the **Layers** section, and set a tag on it by renaming it.

:::note
Don't provide a **Tag name** by yourself! Set the Tag name as mentioned in each component. 
:::

The name format is differentiated based on the type of components, as some components also need other elements for their complete design like <a href="/docs/Designguidelines/tagging-components-in-figma#tab--pager">Tab & Pager</a>, and <a href="/docs/Designguidelines/tagging-components-in-figma#slider--page-indicator">Slider & Pager indicator</a>.


Follow the below name format for giving the component a Tag;

:::info
**Format:**

`{**Group or Frame name**} + “:" + {**Tag**}`

**Example:** Group1:Button
:::

**Group or Frame name:** The name which is given in the Figma design.

**Tag:** Tag added to the component from the list of available Tag names attached to a specific component.

**Reference Tag:** A number added for the reference of a tagged component to know that it has an attached element. It is added only for the components like Tab & Pager, and Slider & Pager indicator.

For <a href="/docs/Designguidelines/tagging-components-in-figma#tab--pager">Tab & Pager</a>, and <a href="/docs/Designguidelines/tagging-components-in-figma#slider--page-indicator">Slider & Pager indicator</a>;

:::info
**Format:**

`{**Group or Frame name**} + “:" + {**Tag**} + “:” + {**Reference Tag**}`

**Example:** Group1:Tab:1,

Group121:Pager:1,

Group122:Pager:1

:::

Follow the supported components below to learn how to set a tag on each of them,



### AppBar

**Tag name**: AppBar

**Format:**  `{Group or Frame name} + “:" + AppBar`

**Example:** Group1:AppBar

![Example banner](./img/Tagging/appbar.png)



### AutoCompleteTextField

**Tag name**: AutoCompleteTextField

**Format:**  `{Group or Frame name} + “:" + AutoCompleteTextField`

**Example:** Group12:AutoCompleteTextField

![Example banner](./img/Tagging/AutocompleteTextfield.png)



### BottomAppB**ar**

**Tag name**: BottomAppBar

**Format:**  `{Group or Frame name} + “:" + BottomAppBar`

**Example:** Frame1:BottomAppBar

:::info
If BottomAppBar/ BottomBar includes **FloatingActionButton**, then also add Tag for it with BottomAppBar/ BottomBar.
:::

![Example banner](./img/Tagging/Bottombar.png)


### BottomBar

**Tag name**: BottomBar

**Format:**  `{Group or Frame name} + “:" + BottomBar`

**Example:** Group12:BottomBar

![Example banner](./img/Tagging/Bottombar.png)


### BottomSheet

**Tag name**: BottomSheet

**Format:**  `{Group or Frame name} + “:" + BottomSheet`

**Example:** Group12:BottomSheet

![Example banner](./img/Tagging/Bottomsheet.png)


### Calendar

**Tag name**: Calendar

**Format:**  `{Group or Frame name} + “:" + Calendar`

**Example:** Group12:Calendar

![Example banner](./img/Tagging/Calendar.png)


### CheckBox

**Tag name**: CheckBox

**Format:**  `{Group or Frame name} + “:" + CheckBox`

**Example:** Group12:CheckBox

![Example banner](./img/Tagging/Checkbox.png)


### ChipView

**Tag name**: ChipView

**Format:**  `{Group or Frame name} + “:" + ChipView`

**Example:** Group12:ChipView

![Example banner](./img/Tagging/Chipview.png)


### CircleImage

**Tag name**: CircleImage

**Format:**  `{Group or Frame name} + “:" + CircleImage`

**Example:** Group12:CircleImage

![Example banner](./img/Tagging/CircleImage.png)


### CircleProgressBar

**Tag name**: CircleProgressBar

**Format:**  `{Group or Frame name} + “:" + CircleProgressBar`

**Example:** Group12:CircleProgressBar

![Example banner](./img/Tagging/CricleProgressbar.png)


### Dialog

**Tag name**: Dialog

**Format:**  `{Group or Frame name} + “:" + Dialog`

**Example:** Group12:Dialog

![Example banner](./img/Tagging/Dialog.png)



### DrawerItem

**Tag name**: DrawerItem

**Format:**  `{Group or Frame name} + “:" + DrawerItem`

**Example:** Group12:DrawerItem

![Example banner](./img/Tagging/DrawerItem.png)


### Dropdown

**Tag name**: Dropdown

**Format:**  `{Group or Frame name} + “:" + Dropdown`

**Example:** Group12:Dropdown

![Example banner](./img/Tagging/Dropdown.png)



### EditText

**Tag name**: EditText

**Format:**  `{Group or Frame name} + “:" + EditText`

**Example:** Group12:EditText

![Example banner](./img/Tagging/EditText.png)


### ExpandableList

**Tag name**: ExpandableList

**Format:**  `{Group or Frame name} + “:" + ExpandableList`

**Example:** Group12:ExpandableList

![Example banner](./img/Tagging/ExpandList.png)



### FloatingActionButton

**Tag name**: Fab

**Format:**  `{Group or Frame name} + “:" + Fab`

**Example:** Group1:Fab

![Example banner](./img/Tagging/Fab.png)



### FloatingTextField

**Tag name**: FloatingTextField

**Format:**  `{Group or Frame name} + “:" + FloatingTextField`

**Example:** Group12:FloatingTextField

![Example banner](./img/Tagging/FloatingTextField.png)


### Footer

**Tag name**: Footer

**Format:**  `{Group or Frame name} + “:" + Footer`

**Example:** Group12:Footer

![Example banner](./img/Tagging/Footer.png)



### Grid

**Tag name**: Grid

**Format:**  `{Group or Frame name} + “:" + Grid`

**Example:** Group12:Grid

![Example banner](./img/Tagging/Grid.png)


### Header

**Tag name**: Header

**Format:**  `{Group or Frame name} + “:" + Header`

**Example:** Group12:Header

![Example banner](./img/Tagging/Header.png)



### IconButton

**Tag name**: IconButton

**Format:**  `{Group or Frame name} + “:" + IconButton`

**Example:** Group12:IconButton

![Example banner](./img/Tagging/IconButton.png)



### Image

**Tag name**: Image

**Format:**  `{Group or Frame name} + “:" + Image`

**Example:** Group12:Image

![Example banner](./img/Tagging/Image.png)



### List

**Tag name**: List

**Format:**  `{Group or Frame name} + “:" + List`

**Example:** Group12:List

![Example banner](./img/Tagging/List.png)



### Map

**Tag name**: Map

**Format:**  `{Group or Frame name} + “:" + Map`

**Example:** Group12:Map

![Example banner](./img/Tagging/Map.png)


### OTPView

**Tag name**: OtpView

**Format:**  `{Group or Frame name} + “:" + OtpView`

**Example:** Group12:OtpView

![Example banner](./img/Tagging/OTPView.png)



### ProgressBar

**Tag name**: ProgressBar

**Format:**  `{Group or Frame name} + “:" + ProgressBar`

**Example:** Group12:ProgressBar

![Example banner](./img/Tagging/Progressbar.png)


### Radio

**Tag name**: Radio

**Format:**  `{Group or Frame name} + “:" + Radio`

**Example:** Group12:Radio

![Example banner](./img/Tagging/Radio.png)


### RadioGroup

**Tag name**: RadioGroup

**Format:**  `{Group or Frame name} + “:" + RadioGroup`

**Example:** Group12:RadioGroup

![Example banner](./img/Tagging/RadioGroup.png)


### RatingBar

**Tag name**: RatingBar

**Format:**  `{Group or Frame name} + “:" + RatingBar`

**Example:** Group12:RatingBar

![Example banner](./img/Tagging/Rating.png)


### SearchView

**Tag name**: SearchView

**Format:**  `{Group or Frame name} + “:" + SearchView`

**Example:** Group12:SearchView

![Example banner](./img/Tagging/Searchview.png)


### SeekBar

**Tag name**: SeekBar

**Format:**  `{Group or Frame name} + “:" + SeekBar`

**Example:** Group12:SeekBar

![Example banner](./img/Tagging/Seekbar.png)


### Sidebar

**Tag name**: Sidebar

**Format:**  `{Group or Frame name} + “:" + Sidebar`

**Example:** Group12:Sidebar

![Example banner](./img/Tagging/Sidebar.png)


### Slider & Page Indicator

**Tag name for Slider**: Slider

**Tag name for Pager Indicator**: PagerIndicator

**Format:**  `{Group or Frame name} + “:" + Slider + {Reference Tag}`

**Format:**  `{Group or Frame name} + “:" + PagerIndicator + {Reference Tag}`

**Example:** Group12:Slider:1,
Group123:PagerIndicator:1,

:::tip
The reference tag number given should be the same for one group, and different for another group in the design.
:::

![Example banner](./img/Tagging/Slider.png)

For **Web**, it has other two supported properties,

**Tag name for previous slider control**: PreviousSliderControl

**Tag name for next slider control**: NextSliderControl

**Example:** Group12:Slider:1,
Group123:PagerIndicator:1,
Group445:PreviousSliderControl:1,
Group445:NextSliderControl:1

![Example banner](./img/Tagging/Slider-prev-next.png)


### Staggered

**Tag name**: Staggered

**Format:**  `{Group or Frame name} + “:" + Staggered`

**Example:** Group12:Staggered

![Example banner](./img/Tagging/Staggered.png)


### Switch

**Tag name**: Switch

**Format:**  `{Group or Frame name} + “:" + Switch`

**Example:** Group12:Switch

![Example banner](./img/Tagging/Switch.png)


### Tab & Pager

**Tag name**: Tab

**Tag name**: Pager

**Format:**  `{Group or Frame name} + “:" + Tab + {Reference Tag}`

**Example:** Group12:Tab:1,

Group12:Pager:1

![Example banner](./img/Tagging/Tab%26pager.png)




### TextArea

**Tag name**: TextArea

**Format:**  `{Group or Frame name} + “:" + TextArea`

**Example:** Group12:TextArea

![Example banner](./img/Tagging/TextArea.png)



### WebView

**Tag name**: WebView

**Format:**  `{Group or Frame name} + “:" + WebView`

**Example:** Group12:WebView

![Example banner](./img/Tagging/Webview.png)
