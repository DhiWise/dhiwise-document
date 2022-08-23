---
sidebar_position: 4
---

# Group Controls 

Group controls are the control that are collections of other UI components, and are used to set the hierarchy of the UI for an app screen. Refer to specific component guidelines while designing it in Figma, to get them correctly identified in DhiWise.

## Column

Components must be vertically placed one below the other, to get identified as Column.

The component one below the other should have their starting Y from the end of the component which is above it and not in between the above component’s height area i.e it should lie in its overlay, else will not be identified as a Column.

If multiple components are found one below the other vertically with a similar design then it would have a high chance of identifying as a <a href="/docs/Designguidelines/component-specific-guidelines/output-controls#list-view">List</a>.

  ![Example banner](./img/GroupControl/Column.png)

## RadioGroup
RadioGroup is a group having multiple similar <a href="/docs/Designguidelines/component-specific-guidelines/input-controls#radio">Radio</a> buttons in it.

For a group to be a RadioGroup, it must follow the below guidelines:

The group should have multiple <a href="/docs/Designguidelines/component-specific-guidelines/input-controls#radio">Radio</a>  buttons vertically or horizontally, with a similar design for all the Radio buttons.

![Example banner](./img/GroupControl/RadioGroup.png)

## Row
Components must be placed side by side horizontally with one another, to get identified as a Row.

If multiple components are found side by side with each other horizontally with a similar design then it would have a high chance of identifying as a <a href="/docs/Designguidelines/component-specific-guidelines/output-controls#list">Horizontal list</a>.

![Example banner](./img/GroupControl/Row.png)

## ScrollView
Figma offers <a href="https://help.figma.com/hc/en-us/articles/360039818734-Prototype-scrolling-with-overflow-behavior#Apply_overflow_behavior" target="_blank">overflow behaviour</a> for scrolling the elements. While designing the screens which are scrollable follow the below guidelines:

In a case where a ScrollView is designed between the content of the <a href="/docs/Designguidelines/component-specific-guidelines/navigation-controls#appbar">AppBar</a> and the <a href="/docs/Designguidelines/component-specific-guidelines/navigation-controls#bottom-bar">BottomBar</a>, then all elements which are in that area should be grouped in a **single group**, to get identify it as a ScrollView.

![Example banner](./img/GroupControl/Scrollview.png)

## Stack

Components are placed one over another, as in forming a stack of different layers.

For Stack, the components should overlay each other else it will be identified as a <a href="/docs/Designguidelines/component-specific-guidelines/group-controls#column">Column</a>  or a <a href="/docs/Designguidelines/component-specific-guidelines/group-controls#row">Row</a>.

If components are not grouped or placed properly in design then it will be considered as a Stack. In case it is a <a href="/docs/Designguidelines/component-specific-guidelines/group-controls#column">Column</a> and while designing it if the hierarchy is not placed as one below the other then it will identify it as a Stack.

Similarly, for <a href="/docs/Designguidelines/component-specific-guidelines/group-controls#row">Row</a>, if the hierarchy of its elements is not properly set side by side with each other then also it will be considered as Stack.

![Example banner](./img/GroupControl/Stack.png)

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).