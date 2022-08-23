---
sidebar_position: 0
---

import navigationImg from "./img/navigation.png"

import figmaImg from "./img/figma.png"
import XdImg from "./img/XD.png"
import SketchImg from "./img/sketch.png"
import blank from "./img/blank.png"
import template from "./img/template.png"
import SelectScreen from "./img/Select-screen.png"

# Build an Android App

Android app builder is an app development software that converts app designs into code (Kotlin). It helps reduce the standard development lifecycle time by half. Furthermore, the UI code can be enhanced by adding various integrations & actions into the view components like API integrations, navigation, permissions, and more; therefore, producing a rich source code.

Choose one from below to start creating your app:

<div className="grid-cols-3 grid gap-20">
  <a href="#create-a-new-app" className="Card">
    <img src={blank} alt="" />
    <h4 className="">
      App design from Figma, Adobe XD, or Sketch
    </h4>
  </a>
  <a href="#create-from-template"  className="Card">
    <img src={template} alt="" />
    <h4 className="">
      Templates
    </h4>
  </a>
  <a href="#create-from-screen-library"  className="Card">
    <img src={SelectScreen} alt="" />
    <h4 className="">
      Screen Library
    </h4>
  </a>
</div>


<br/>

:::note

DhiWise converts your design to code by **auto-identifying** all your screen UI, widgets, and generates complete code for the same. Easily setup actions on your widgets like Navigation, API integration, and many more to easily generate your complete app in no time!

:::


## **Project set up**

Follow the below steps to **create a Android application**:

<!-- type6 -->

- <a href="/docs/android/intro#create-an-application">Create an application:</a> Create a new application with your design, or create one from the vast collection of templates or screen library.
- <a href="/docs/android/add-apis-and-enviroment-variables">Add APIs and Enviroment variables</a> Add APIs manually or upload a Postman collection and start integrating APIs into your app.
- <a href="/docs/android/change-view">Change View:</a> Change or modify the widgets easily along with their properties right here, rather than moving back to Figma.
- <a href="/docs/android/manage-app-lifecycle">Manage app life cycle:</a> Manage app life cycle actions and customise them all in just a few simple clicks.
- <a href="/docs/android/build-reviewcode">Build app:</a> Build your app anytime and get your source code easily.

:::tip
<a href="https://app.dhiwise.com" target="_blank">Sign In</a> to DhiWise, if you already haven’t!
:::

## **Create an application**

Click on `New application`

You will have three options to **create an application**
<!-- typelink -->
1. <a href="#create-a-new-app" className="hightlight">Create a new app:</a> Create an application from scratch by importing your app design from Figma, Adobe XD, or Sketch.
2. <a href="#create-from-template" className="hightlight">Create from Template:</a> In case you do not have an app design file, create an application from the wide range of built-in templates based on various categories.
3. <a href="#create-from-screen-library" className="hightlight">Create from Screen Library:</a> Also you can pick screens of your category choice and create an application from 500+ screens provided by DhiWise.


### Create a new app


#### **Step 1:** 
Select platform as **Mobile** to create a Android app. Next, enter your `Application name` and select `Technology` from the drop-down as **Android**.

![Example banner](./images/create-app.gif)

#### **Step 2:** 
Also, select the `Design platform` from which you want to import your app design,

<!-- type3 -->
<div className="grid-cols-3 grid gap-20">
  <a className="card">
    <h2 className="flex items-center">
      <div className="cardIcon">
        <img src={figmaImg} alt="" />
      </div>
      Figma
    </h2>
    <p>Integrate your Figma account with DhiWise and import your designs to DhiWise with help of Figma URL.</p>
  </a>
  <a className="card">
    <h2 className="flex items-center">
      <div className="cardIcon">
        <img src={XdImg} alt="" />
      </div>
      Adobe</h2>
     <p>Upload your Adobe XD file and get your Figma design file on your registered email, to create your app.</p>
  </a>
  <a className="card">
    <h2 className="flex items-center">
      <div className="cardIcon">
        <img src={SketchImg} alt="" />
      </div>
    Sketch</h2>
    <p>Upload your Sketch file and get your Figma design file on your registered email, to create your app.</p>
  </a>
</div>


#### **Step 3:**
For Figma, link your `Figma account` with DhiWise and add your app design’s `Figma URL`, and click on <code className="primary">Create a new app</code>. 

:::caution

Select the same viewport size as that in your Figma design.

:::

Next, select screens of your choice for which you want to create an app or directly click on `Select all screens`, also select viewport size, and click `Submit`. 

:::caution
If you are trying to sync someone else’s private Figma, you won’t be able to access that design.
:::



### Create from Template


In case you do not have a design file or want to create one from a built-in template, choose one and create an app. DhiWise offers multiple production-ready app template designs with a various range of categories.

#### **Step 1:** 
Select a template based on category of your choice.

#### **Step 2:** 
Next, click on <code className="primary">Use template</code>
#### **Step 3:**  
Enter your `Application name` and select `Technology` as **Android**, click on <code className="primary">Create app</code>.

![Example banner](./images/template.gif)


### Create from Screen Library

In case you do not have a design file you can also pick individual screens based on screen categories to create your app design quickly. For example, a login screen, authentication screen, and similarly other screens.

#### **Step 1:** 
Select an app category for your screens.

#### **Step 2:** 
From the list of screens available for the selected category, click on ➕ to add a screen and on 👁️ to preview the screen. To remove a screen click on ❌.

#### **Step 3:**
Enter your `Application name` and select `Technology` as **Android**, click on <code className="primary">Create app</code>.

![Example banner](./images/select-screen.gif)

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).

