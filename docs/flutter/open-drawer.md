---
sidebar_position: 9
---

# Open Drawer

A drawer is an invisible side screen. It is a sliding left menu that generally contains important links in the application and occupies half of the screen when displayed. Drawer is a short menu from which you can navigate to app functionalities easily.

## How to set up open drawer

#### **Step 1:**
Select the screen from the screen list on which you want to set up open drawer.

#### **Step 2:** 
On a click of a particular icon or view, on the `onClick` property select `Open drawer` from the listed actions.
<!-- typewhiteonclick -->

:::info
DhiWise auto-identifies all the drawer item screens of your app, which helps you choose a **drawer item** easily while you set up the action.
:::

#### **Step 3:** 
Then a list of **drawer item** screens will be displayed. Pick one which you want to open on the click.

#### **Step 4:** 
Once the screen is selected, click on `Save changes`.

<!-- ![Example banner](./img/app.gif) -->

#### Generated code snippet



```js
class AppRoutes {
  static String loginPageScreen = '/login_page_screen';
  
  static String verifyOtpScreen = '/verify_otp_screen';

  static List<GetPage> pages = [
     GetPage(
      name: loginPageScreen,
      page: () => LoginPageScreen(),
      bindings: [
        LoginPageBinding(),
      ],
    ),
    
    GetPage(
      name: verifyOtpScreen,
      page: () => VerifyOtpScreen(),
      bindings: [
        VerifyOtpBinding(),
      ],
    ),
  ];
}
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).