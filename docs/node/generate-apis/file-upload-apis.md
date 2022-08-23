---
sidebar_position: 2
---

# File Upload APIs

In DhiWise, you can configure APIs for upload attachment. You can have an API that can be used to upload file on a local machine, AWS S3 public bucket, and AWS S3 private bucket.

Here is the API that one can use once the "upload attachment" configuration has been done.

:::info
API for upload attachment will be the same in local upload, AWS S3 public, and private bucket.
:::

**API URL:** <e className="post method">POST</e> `<Base URL>/admin/upload`

To upload single or multiple files.

#### Sample request:

set header `{ 'Content-Type: multipart/form-data' }` in a request.

<table>
    <tr>
        <th>Key</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>file[]</td>
        <td>Select file/files to upload</td>
    </tr>
    <tr>
        <td>folderName</td>
        <td>Optional, enable to upload file to specific folder</td>
    </tr>
    <tr>
        <td>fileName</td>
        <td>Optional, enable to give Specific file name to uploaded File</td>
    </tr>
</table>

### cURL

```js
curl --location --request POST '<Base URL>/admin/upload' \
--header 'Content-Type: multipart/form-data' \
--form 'file[]=@"/home/testuser/Pictures/img1.png"' \
--form 'file[]=@"/home/testuser/Pictures/img2.png"' \
--form 'file[]=@"/home/testuser/Pictures/img3.png"' 
```

#### Nodejs Axios
```js
var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('file[]', fs.createReadStream('/path/to/file'));

var config = {
  method: 'post',
  url: '<Base URL>/admin/upload',
  headers: { 
    'Content-Type': 'multipart/form-data', 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

#### Sample request:

Status code: `200`

```js
{
  "status": "SUCCESS",
  "message": "4 File uploaded successfully out of 5",
  "data": {
    "uploadSuccess": [
      {
        "name": "img1.png",
        "path": "{path where file has been uploaded}",
        "status": true
      },
      {
        "name": "img2.png",
        "path": "{path where file has been uploaded}",
        "status": true
      }
    ],
    "uploadFailed": [
      {
        "name": "img3.png",
        "error": "Filetype not allowed.",
        "status": false
      }
    ]
  }
}
```

If you have selected "S3 private upload" as a type of upload then project will have one extra API given below.

## Get Presigned URL for S3 private Upload

Once file has been uploaded on S3 private bucket, we can not access that file without credentials.
AWS gives facility that if one have presigned URL of uploaded file then using that URL you can open that file before specified time. By default DhiWise adds expiration time of 15 mins. You can also modified `AWS_URL_EXPIRATION` variable declared in `.env` file.


**API URL:** <e className="post method">POST</e> `<Base URL>/admin/generate-pre-signed-url`

#### Sample request:

Status code: `200`

```js
{
  {
  "uri": "s3 URL"
}
```

### cURL

```js
curl --location --request POST 'http://localhost:5000/admin/generate-pre-signed-url' \
--header 'Content-Type: application/json' \
--data-raw '{
  "uri": "s3 URL"
}'
```

#### Nodejs Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "uri": "s3 URL"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/generate-pre-signed-url',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

#### Sample success response:

Status code: `200`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": [
        {
            "status": true,
            "path": "URL to access file"
        }
    ]
}
```

#### Sample failure response

Status code: `200`

```js
{
    "status": "FAILURE",
    "message": "{requested url} is not a valid S3 uri.",
    "data": {},
 }
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).