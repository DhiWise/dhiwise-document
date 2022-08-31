---
sidebar_position: 15
---

# File Upload
:::info
Currently, this feature is not available on <a href="https://app.dhiwise.com/sign-up" target="_blank">app.dhiwise.com.</a> Stay tuned!
:::

Upload files you wish in your app by setting up file upload in a few easy steps in DhiWise.


## How to setup File upload

Before starting the setup you must require a file upload API to upload your file from your app. Add this API to your app in DhiWise, to know how to add it <a href="/docs/flutter/add-apis-and-enviroment-variables">learn here</a>.

:::note

The upload file API is required before your start API binding.

:::

#### **Step 1:** 
Select the widget on which you want to integrate the upload API, and on the onClick property select API integration, to know how to integrate an API <a href="/docs/flutter/api-integration">Click here</a>.

#### **Step 2:** 
Inside API integration, select upload API.

:::info
For the Header in Handle request, select Content-type multipart/form-data
:::

#### **Step 3:** 
Next, click on `Selected file` in `Handle request` on `formData` for file upload.


#### **Step 4:** 
As you select `Selected file` you need to provide the type and format of the file you want to upload. `Select type` and `Select format` of your file from the below supported types;

<table>
  <tr>
    <th>
      Type
      </th>
      <th>
      Description
      </th>
  </tr>
  <tr>
    <td>Image</td>
    <td>
      Upload image files<br/>
      <code>jpeg</code>  | <code> png</code>  | <code> tiff</code>  | <code> heic</code> 
    </td>
  </tr>
   <tr>
    <td>Video</td>
    <td>
      Upload video files<br/>
      <code>mp4</code>  | <code> mov</code> 
    </td>
  </tr>
   <tr>
    <td>Audio</td>
    <td>
      Upload audio files<br/>
      <code>mp3</code>  | <code> wav</code> 
    </td>
  </tr>
   <tr>
    <td>Document</td>
    <td>
      Upload document files<br/>
      <code>doc</code>  | <code> pdf</code>  | <code> xls</code>  | <code> ppt</code>  | <code> txt </code> 
    </td>
  </tr>
</table>

#### **Step 5:**
Next, you need to provide maximum size for file to be uploaded, along with size type from **KB** or **MB**.

<!-- ![Example banner](./img/app.gif) -->


 Next, you can handle API response, as well set actions on success and failure of the API. <a href="/docs/flutter/api-integration#step-2-handle-response">Learn more</a>

 
 At this stage, you have Upload file functionality added to your application! 


<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).