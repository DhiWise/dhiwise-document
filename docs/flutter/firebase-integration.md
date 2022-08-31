---
sidebar_position: 16
---
import select from "./img/select.png"
import create from "./img/create.png"
import check from "./img/check-mark.png"
import close from "./img/close.png"

# Firebase Integration
:::info
Currently, this feature is not available on <a href="https://app.dhiwise.com/sign-up" target="_blank">app.dhiwise.com.</a> Stay tuned!
:::

Implement backend service Firebase in your app and help your app run more effectively with it.

## Create a service account in Firebase
To access Firebase, create a **Firebase service account while developing your Flutter app on DhiWise** and connect it to DhiWise. Your Firebase service account only gives access to **store** and **retrieve** information from and to the Firebase. **[Learn more](https://firebase.google.com/docs/admin/setup?authuser=0)**.

<h3> How to setup a service account in Firebase </h3>

Sign in to your Firebase account, once you sign in follow the below steps:

#### **Step 1:**
Click on <code className="primary">Go to console</code>.

<!-- ![Example banner](./img/app.gif) -->

Create your **Project** by following all the necessary steps, and once you reach the Project’s dashboard, follow the below steps to proceed further.

#### **Step 2:**
Click on the Project Overview settings icon > Project settings > Service accounts.

#### **Step 3:**
Under Service accounts, choose Node.js then click on Generate new private key.

<!-- ![Example banner](./img/app.gif) -->
#### **Step 4:**
You will get a popup with the below warning and the option to generate the key.

:::caution
Your private key gives access to your project's Firebase services. Keep it confidential and never store it in a public repository.
:::

#### **Step 5:**
Click on <code className="primary">Generate Key</code>.

<!-- ![Example banner](./img/app.gif) -->

:::info
The downloaded file is in JSON format which you can upload on DhiWise. After that, you won't need to write any code, just check the appropriate check box on the DhiWise platform.
:::

Now, you can upload these downloaded files in DhiWise, and proceed further easily.


## Firebase Authentication

Authentication helps in accessing and keeping your data secure. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

<h3>How to setup Firebase authentication </h3>

#### **Step 1:** 
Log in to your Firebase account. Once logged in, go to the left-hand control panel and click on `Build > Authentication`.

#### **Step 2:** 
Click on **Sign-in method**. Select and enable the type of sign-in or authentication that you want for your application.

<!-- ![Example banner](./img/app.gif) -->

Select a sign-in method and **setup** as mentioned in Firebase.

At this stage, you have successfully **enabled** Firebase authentication in Firebase.

## Use Firestore rules to secure data

Cloud Firestore Security Rules allow you to control **access** to documents and collections in your database. The flexible rules syntax allows you to create rules and also track them match anything, from all writes to the entire database to operations on a specific document.

<h2>How to setup Firestore rules file</h2>

#### **Step 1:** 
Log in to Firebase, go to `Project overview > Build > Firestore Database`

And click on **Create database**

<!-- ![Example banner](./img/app.gif) -->
#### **Step 2:** 
Once you click there, you will get a dialog to create a database and ask you **Secure rules for Cloud Firestore**

<!-- ![Example banner](./img/app.gif) -->

After you define your data structure, you will need to write rules to secure your data. <a href="https://firebase.google.com/docs/firestore/security/get-started?authuser=0&hl=en" target="_blank">Learn more</a>. 

:::info
**Production mode:** All third party reads and writes will be denied.

**Test mode:** The default security rules for test mode allow anyone with your database reference to view, edit and delete all data in your database for the next 30 days.
:::

Click <code className="primary">Next</code>, once you secure rules for cloud firestore.

#### **Step 3:** 
Next, you need to **Set Cloud Firestore location**, here select your Cloud Firestore location and click `Enable`.

As you can see, your rules file is generated.

<!-- ![Example banner](./img/app.gif) -->

At this stage, you have successfully added Firestore.rules file in Firebase.

## Integrate Cloud Firestore

Cloud Firestore is a **cloud-hosted**, **NoSQL** database that your Flutter app can directly access and use even more **effectively**. Integrate it easily in your Flutter app using simple steps in DhiWise.

<h3>How to integrate Cloud Firestore </h3>

In your DhiWise application dashboard select Cloud Firestore Integration from the left.

<!-- ![Example banner](./img/app.gif) -->

For integrating Cloud Firestore there are mainly 3 simple steps to follow, as below;

#### **Step 1:** Select option: Sync with Firebase or create new schema.

To sync Firestore data, simply click on **“I have already created tables in Firestore. I want to use them”** under the select schema data or click **“I don’t have available schemas in Firestore. Create new schema”** to create new schemes.

:::info
There's no need to upload the JSON file or authenticate the Firestore account when creating a new schema.
:::

<!-- ![Example banner](./img/app.gif) -->
#### **Step 2:** Authentication: Upload your private key JSON for authentication

Upload your **Firebase service account's** JSON key file. This will link your Firebase account to DhiWise and allow you to access your Firebase schemas for your application. <a href="#create-a-service-account-in-firebase">Learn more</a>.

<!-- ![Example banner](./img/app.gif) -->

#### **Step 3:** Collection: Retrieve a collection from Cloud Firestore  

All of your Cloud Firestore collections are retrieved to use in your application. You can also add more collections by clicking on the ➕️ symbol. Similarly, by clicking on the ➕️ icon under the respective collections, you can add **attributes** to your current collection.

Supported **data types** in collections are:

`String | Number | Boolean | Map | Array Null | Timestamp | Geopoint`

<!-- ![Example banner](./img/app.gif) -->

#### **Step 5:** Cloud Firestore rules: Add rules in individual collection

Select the corresponding **CRUD** checkboxes in the collections list to provide CRUD permission to **Authenticated users**, then click <code className="primary">Save</code>.

Authenticated users will have access to only the permissions they have selected.

Next, click on <code className="primary">Save</code> to save your Cloud Firestore integration.


<!-- ![Example banner](./img/app.gif) -->


At this stage, you have successfully integrated Cloud Firestore into your application.


## Integrate Firebase to your app

<a href="https://firebase.google.com/" tagret= "_blank">Firebase</a> provides a <b>back-end server</b>, a great <b>database</b> and solution for <b>analytics</b>, and useful <b>integrations</b> with other Google products. Also, it is free and affordable to use and set up. A wisely designed backend solution for your app guarantees scalability and data security. Create your app’s backend even faster and in easy steps by integrating Firebase to your Flutter app in DhiWise.

<br/><br/>

:::info
You must have the Cloud Firestore integrated into your app. To know how to get one <a href="#integrate-cloud-firestore">click here</a>. 
:::

<h3>How to setup Firebase</h3>

#### **Step 1:** 
Choose the screen you wish to integrate Firebase for, from the list of screens.

#### **Step 2:** 
Next, go to the widget you want to add integration, and from the suggestion box for the `onClick` property, choose `Firebase integration`, which will take you to its integration screen. Where you will be asked to `Enter function name`. Enter the name of your function and click <code className="primary">Submit</code>.

<!-- typewhiteonclick -->


:::info
The given function name will be generated in the code.
:::

#### **Step 3:** 
After submitting the function name, you will be asked to select a type of Firebase integration. 

- **Query** - To **fetch** data from Firebase.
- **Store** -  To **upload** data to Firebase.

<!-- ![Example banner](./img/app.gif) -->

#### **Step 4:** 
Select the collection you want to use for your integration for `Please select a collection you want to use` from the list of collections available in your Firebase account. 

#### **Step 5:** 
`Select type of integration` 

| Type | Description |
| --- | --- |
| **Single**  | Used to fetch a single record from the database |
| **Multiple** | Used to fetch multiple records from the database |

:::note
For Multiple type, you need to set `data limit`, `order by`, and `order`
:::

#### **Step 6:** 
Bind your screen’s view component or widget directly with your Cloud Firestore database to retrieve and display data in it.

You can `Handle request` inputs in four ways:

- Select operator for comparison before moving forward.

| Type | Description |
| --- | --- |
| **View** | Select any component from your app design. |
| **Constant** | Select a constant you've created in your app. <a href="/docs/flutter/add-app-constants">Learn more</a>|
| **Get from preference** | Select from stored data preference from API integration. |
| **Navigation argument** | Select data that's been passed from one screen to another. <a href="/docs/flutter/navigation#navigation-with-arguments">Learn more</a> |


#### **Step 7:** 
`Handle response` 

| Type | Description |
| --- | --- |
| **View** | Select any component from your app design. |
| **Save to preference** | Storing the data to preference. |

#### **Select 8:** 
`Handle action` Select the action you wish to take, once the Firebase call has either been accepted successfully or refused due to a mistake.

<div className="grid-cols-3 grid gap-20">
    <div className="card successCard">
      <h4 className="flex items-center">
        <div className="cardIcon">
          <img src={check} alt="" />
        </div>
          On success
      </h4>
      <p>1. <a href="/docs/flutter/show-alert">Show alert</a>
      <br/>
      2. <a href="/docs/flutter/navigation">Navigation</a></p>
    </div>
    <div className="card errorCard">
      <h4 className="flex items-center">
        <div className="cardIcon" style={{width:"14px"}}>
          <img src={close} alt="" />
        </div>
          On error
      </h4>
      <p>
      1. <a href="/docs/flutter/show-alert">Show alert</a>
      <br/>
      2. <a href="/docs/flutter/navigation">Navigation</a></p>
    </div>
  </div>  
  <br/>

  At this stage, you have integrated Firebase  into your application!

  <br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).