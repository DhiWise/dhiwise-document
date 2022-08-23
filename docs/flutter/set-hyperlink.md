---
sidebar_position: 12
---

# Set Hyperlink

Most mobile applications provide links that take users to a different section of the same app or to external websites. **Set Hyperlink** helps us in achieving this in our Flutter application.
## How to setup hyperlink
#### **Step 1:**
Select the screen from the screen list on which you want to set up set hyperlink.

#### **Step 2:** 
On a click of a particular icon or widget, on the `onClick` property select `Set hyperlink` from the listed actions.
<!-- typewhiteonclick -->
Now, add the **URL** which you want to open on the click of it.
<!-- typewhiteonclick -->

At this stage, you have successfully set hyperlink to your application.


<!-- ![Example banner](./img/app.gif) -->


#### Generated code snippet



```js
 onTap() async {
    var url = 'https://www.dhiwise.com/';
    if (!await launch(url)) {
      throw 'Could not launch https://www.dhiwise.com/';
    }
  }
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).
