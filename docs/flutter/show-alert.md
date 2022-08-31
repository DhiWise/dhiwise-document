---
sidebar_position: 10
---

# Show Alert

An alert can be termed a floating view that calls for an immediate response. Alerts are fairly simple to configure.
You can set up an **Alert dialog**, **Snackbar**, or **Toast** for any UI component by entering **Title** and **Message** for the alert dialog and only **Message** for Snackbar or Toast.

## How to setup alert

#### **Step 1:** 
Select the screen from the screen list on which you want to set up alert dialog.

#### **Step 2:** 
Now, go to the widget or view component you want to add an alert to, and `onClick` property, choose `Show alert` which will take you to the show alert setup screen.

#### **Step 3:** 
Add input for `Please choose the type of alert you want to integrate` select a type from the below;
<table className="table-key">
  <tbody>
    <tr>
      <td>Alert dialog</td>
      <td>Alert Dialog is used to display an Alert message and provide a yes-or-no response</td>
    </tr>
    <tr>
      <td>Toast</td>
      <td>It provides simple feedback about an operation in a small popup and disappears on its own after the allotted time is over</td>
    </tr>
    <tr>
      <td>Snackbar</td>
      <td>It is a lightweight message that briefly informs the user when a certain action occurs and disappears on its own after the allotted time is over</td>
    </tr>
  </tbody>
</table>

#### **Step 4:** 
Next, you need to provide an appropriate message for your Alert dialog/ Toast/ Snackbar as chosen by you and also a **title** if you have chosen an **Alert dialog**. And click on the `Save changes` in the top right corner.

At this stage, you have successfully added an alert to your application.

![Example banner](./images/Show-alert.gif)



#### Generated code snippet



```js title="alertDialog.dart"
 onTapBtnLogin() {
    Get.defaultDialog(
        onConfirm: () => Get.back(),
        title: "Login",
        middleText: "Please provide valid credentials");
  }
```

```js title="snackBar.dart"
onTapImgLogIn() {
    Get.snackbar('', "OTP Verified!");
  }
```

```js title="alertToast.dart"
onTapGroup7() {
    Fluttertoast.showToast(
      msg: "OTP sent on your Email ID",
    );
  }
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).
