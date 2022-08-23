---
sidebar_position: 2
---

# Update APIs

DhiWise provides two APIs , using which you can update the document.

<div className="grid grid-cols-2 gap-20">
    <a className="Card" href="#update-blog">
      <h4>Get document by Id</h4>
    </a>
    <a className="Card" href="#bulk-update-blogs">
      <h4>Get document by Id with populate and select</h4>
    </a>
</div>

## Update Blog

To update any field of a blog. 

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/update/:id`

#### Sample request:

#### **JSON**

```js
{
  "title": "Tasty-updated",
  "alternativeHeadline": "User-friendly-update",
  "image": "Orchestrator",
  "publishDate": "Direct",
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
  "articleSection": "Home",
  "articleBody": "Account",
  "description": "redefine",
  "slug": "Islands",
  "url": "parse",
  "isDraft": true
}
```

#### **cURL**
```js
curl --location --request PUT '<Base URL>/client/api/v1/blog/update/617921bb256df40a522b81a8' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Tasty",
  "alternativeHeadline": "User-friendly",
  "image": "Orchestrator",
  "publishDate": "Direct",
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
  "articleSection": "Home",
  "articleBody": "Account",
  "description": "redefine",
  "slug": "Islands",
  "url": "parse",
  "isDraft": true
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "title": "Tasty",
  "alternativeHeadline": "User-friendly",
  "image": "Orchestrator",
  "publishDate": "Direct",
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
  "articleSection": "Home",
  "articleBody": "Account",
  "description": "redefine",
  "slug": "Islands",
  "url": "parse",
  "isDraft": true
});

var config = {
  method: 'put',
  url: '<Base URL>/client/api/v1/blog/update/617921bb256df40a522b81a8',
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
        "title": "Tasty-updated",
        "alternativeHeadline": "User-friendly-update",
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
        "updatedAt": "2021-11-01T05:37:37.965Z",
        "isDeleted": false,
        "isActive": true,
        "updatedBy": "6179186894c816c40ae15988",
        "id": "617f7d11fb3eb63160d22b62"
    }
}
```

Sample response if "id" given in path param does not exist in a database

Status code: `200`

```js
{
    "status": "RECORD_NOT_FOUND",
    "message": "Record not found with specified criteria.",
    "data": {}
}
```

## Bulk update Blogs

To update records of a collection that satisfies a given condition in the request body.


**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/updateBulk`

#### Sample request:

#### **JSON**

```js
{
  "filter": {
    "isActive": true
  },
  "data": {
    "isDeleted": false
  }
}
```

#### **cURL**
```js
curl --location --request PUT 'http://localhost:5000/client/api/v1/blog/updateBulk' \
--header 'Content-Type: application/json' \
--data-raw '{
  "filter": {
    "isActive": true
  },
  "data": {
    "isDeleted": false
  }
}'
```



#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "filter": {
    "isActive": true
  },
  "data": {
    "isDeleted": false
  }
});

var config = {
  method: 'put',
  url: 'http://localhost:5000/client/api/v1/blog/updateBulk',
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

#### Sample success response:

Status code: `200`

```
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