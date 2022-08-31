---
sidebar_position: 8
---

import navigationImg from "./img/navigation.png"

# Social Authentication

Social media authentication allows users to access the app without going through the tedious process of account registration. When a you choose a specific social media for login on the login page, you will be redirected to the login page of that social media, and with the help of that credentials you will be able to login into the app.

#### **Step 1:** 
Select the screen from the screen list on which you want to set up Social authentication.

#### **Step 2:**
Now, go to the widget on which you want to add authentication to, and for the `onClick` 
property, choose `Authentication` which will take you to the authentication setup screen.
<!-- typewhiteonclick -->

#### **Step 3:** 
Select a type of authentication you want to set from below supported types;

### Google

Select Google from the type of authentication list, and your Google authentication is setup.

### Facebook

Select Facebook from the type of authentication list, and your Facebook authentication is setup.

Prerequisites to follow as you set your authentication action;

1. Register Application on ***https://developers.facebook.com/*** and copy **App ID**- Add App ID to ***/android/app/src/main/res/values/strings.xml*** 

:::info
Create above file if it doesn't exist
:::

![Example banner](./images/google-auth.gif)


### Supabase

Prerequisites to follow as you set your authentication action;

1. Add Supabase URL and Supabase public key inside ***lib/core/utils/initial_bindings*** file.

2. For additional details refer ***https://supabase.com/docs/guides/with-flutter***

### Firebase

Prerequisites to follow as you set your authentication action;

1. FlutterFire_CLI 
    
    If don't have then follow the instruction: ***https://firebase.google.com/docs/flutter/setup?platform=ios***

2.  At the root of the project directory run ***flutterfire configure*** command.

#### Facebook

Prerequisites to follow as you set your authentication action;

1. Register Application on ***https://developers.facebook.com/*** and copy **App ID**- Add App ID to ***/android/app/src/main/res/values/strings.xml*** 

:::info
Create above file if it doesn't exist
:::

2. Download the **GoogleService-Info.plist** file from your firebase console.- Drag and drop the downloaded file into the Runner subfolder.

#### Google

1.  Add **SHA-1** inside Firebase project

:::info
Following steps are for **iOS** only
:::

2. Download the **GoogleService-Info.plist** file from your firebase console
3. Drag and drop the downloaded file into the **Runner** subfolder.

#### Sign in/ Sign up

1. At the root of Flutter project **run *flutterfire configure***
2. Enable the authentication provider of Firebase project