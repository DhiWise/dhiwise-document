---
sidebar_position: 3
---

# Delete APIs

DhiWise provides four APIs for deleting documents from a database.

<div className="grid grid-cols-2 gap-20">
    <a className="Card" href="#soft-delete-blog-document">
      <h4>Soft delete a document</h4>
    </a>
    <a className="Card" href="#soft-delete-blog-document">
      <h4>Soft delete multiple documents</h4>
    </a>
    <a className="Card" href="#delete-blog-document">
      <h4>Delete document</h4>
    </a>
    <a className="Card" href="#delete-multiple-documents-of-blog">
      <h4>Delete multiple documents</h4>
    </a>
</div>

## Soft Delete Blog document

If you don't want to delete a record from the database permanently, this API manages to delete record using `isDeleted` key.

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/softDelete/:id`

#### Sample request:

#### **cURL**

```js
curl --location 
--request PUT '<Base URL>/client/api/v1/blog/softDelete/617a24e24229cbbcd9ffb257' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{}'
```


#### **cURL**
```js
var axios = require('axios');
var data = JSON.stringify({});

var config = {
  method: 'put',
  url: '<Base URL>/client/api/v1/blog/softDelete/617a24e24229cbbcd9ffb257',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer {token}'
  },
  data: data
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
    "data": {
        "author": {
            "name": "Samantha Herman IV",
            "image": "payment",
            "email": "Cecil_Renner7@yahoo.com"
        },
        "publisher": {
            "name": "Gustavo Wyman",
            "url": "Concrete",
            "logo": "reboot"
        },
        "_id": "617a24e24229cbbcd9ffb257",
        "title": "Tasty",
        "alternativeHeadline": "User-friendly",
        "image": "Orchestrator",
        "publishDate": "Direct",
        "articleSection": "Home",
        "articleBody": "Account",
        "description": "redefine",
        "slug": "Islands",
        "url": "parse",
        "isDraft": true,
        "addedBy": "6179186894c816c40ae15987",
        "isDeleted": true,
        "isActive": true,
        "createdAt": "2021-10-28T04:19:46.208Z",
        "updatedAt": "2021-11-02T05:34:57.354Z",
        "updatedBy": "6179186894c816c40ae15988",
        "id": "617a24e24229cbbcd9ffb257"
    }
}
```

#### Sample response if "id" does not exist in a database


Status code: `200`

```js
{
    "status": "RECORD_NOT_FOUND",
    "message": "Record not found with specified criteria.",
    "data": {}
}
```

## Soft delete multiple Blog documents

To soft delete multiple documents of a collection using "id".

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/softDeleteMany`

#### Sample request:

#### **JSON**

```js
{
  "ids": [
    "6180d0aee52b8d1815e5082c",
    "617f7d11fb3eb63160d22b62"
  ]
}
```

#### **cURL**
```js
curl --location 
--request PUT '<Base URL>/client/api/v1/blog/softDeleteMany' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
  "ids": [
    "6180d0aee52b8d1815e5082c",
    "617f7d11fb3eb63160d22b62"
  ]
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "ids": [
    "6180d0aee52b8d1815e5082c",
    "617f7d11fb3eb63160d22b62"
  ]
});

var config = {
  method: 'put',
  url: '<Base URL>/client/api/v1/blog/softDeleteMany',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer {token}'
  },
  data: data
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
    "data": {
        "n": 2,
        "nModified": 2,
        "ok": 1
    }
}
```

## Delete Blog Document

To delete the record permanently from a database.

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/delete/:id`

#### Sample request:

If a model has child records, then passing `"isWarning": true` flag will give you a number of dependent records and will not delete records.

Passing `"isWarning": false` flag will delete record and its dependent records from a database.

#### **cURL**

```js
curl --location --request DELETE '<Base URL>/client/api/v1/blog/delete/617f7d11fb3eb63160d22b62' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
  "isWarning": false
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "isWarning": false
});

var config = {
  method: 'delete',
  url: '<Base URL>/client/api/v1/blog/delete/617f7d11fb3eb63160d22b62',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer {token}'
  },
  data: data
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
    "data": {
        "author": {
            "name": "Samantha Herman IV",
            "image": "payment",
            "email": "Cecil_Renner7@yahoo.com"
        },
        "publisher": {
            "name": "Gustavo Wyman",
            "url": "Concrete",
            "logo": "reboot"
        },
        "_id": "617f7d11fb3eb63160d22b62",
        "title": "Tastyupdate",
        "alternativeHeadline": "User-friendlyupdate",
        "image": "Orchestrator",
        "publishDate": "Direct",
        "articleSection": "Home",
        "articleBody": "Account",
        "description": "redefine",
        "slug": "Islands",
        "url": "parse",
        "isDraft": true,
        "addedBy": "6179186894c816c40ae15988",
        "createdAt": "2021-11-01T05:37:21.667Z",
        "updatedAt": "2021-11-02T06:13:31.982Z",
        "isDeleted": true,
        "isActive": true,
        "updatedBy": "6179186894c816c40ae15988",
        "id": "617f7d11fb3eb63160d22b62"
    }
}
```

#### Sample failure response:

Status code: `200`

```js
{
    "status": "RECORD_NOT_FOUND",
    "message": "Record not found with specified criteria.",
    "data": {}
}
```

#### Sample success response where `"isWarning": true`

Status code: `200`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "user": 1,
        "Blog": 0,
        "userTokens": 0,
        "userRole": 0
    }
}
```

Sample success response where `"isWarning": false`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "n": 1,
        "ok": 1,
        "deletedCount": 1
    }
}
```

## Delete multiple documents of Blog

To delete multiple documents of a Blog by Ids.


**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/deleteMany`

#### Sample request:

#### **JSON**

```js
{
  "isWarning": false,
  "ids": [
    "6180d0aee52b8d1815e5082c",
    "617f7d11fb3eb63160d22b62"
  ]
}
```

#### **cURL**
```js
curl --location --request DELETE '<Base URL>/client/api/v1/blog/deleteMany' \
--header 'Content-Type: application/json' \
--data-raw '{
  "isWarning": false,
  "ids": [
    "6180d0aee52b8d1815e5082c",
    "617f7d11fb3eb63160d22b62"
  ]
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "isWarning": false,
  "ids": [
    "6180d0aee52b8d1815e5082c",
    "617f7d11fb3eb63160d22b62"
  ]
});

var config = {
  method: 'delete',
  url: '<Base URL>/client/api/v1/blog/deleteMany',
  headers: { 
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```


#### Sample success response where `"isWarning": true`

Status code: `200`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "user": 2,
        "Blog": 0,
        "userTokens": 0,
        "userRole": 0
    }
}
```


#### Sample success response where `"isWarning": false`

Status code: `200`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "n": 2,
        "ok": 1,
        "deletedCount": 2
    }
}
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).