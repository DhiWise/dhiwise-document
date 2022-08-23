---
sidebar_position: 0
---

# Create APIs


<div className="grid grid-cols-2 gap-20">
    <a className="Card" href="/docs/node/generate-apis/crud/create-apis#create-blog">
      <h4>Create</h4>
    </a>
    <a className="Card" href="/docs/node/generate-apis/crud/create-apis#create-bulk-blogs">
      <h4>Bulk Create</h4>
    </a>
</div>

## Create Blog

To create a document of a Blog.

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/create`

#### A valid sample request

#### JSON

```js
{
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
}
```

#### cURL

```js
curl --location 
--request POST '<Base URL>/client/api/v1/blog/create' \
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

#### Nodejs-Axios

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
  method: 'post',
  url: '<Base URL>/client/api/v1/blog/create',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': 'Bearer {token}'
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
  "data": {
    "_id": "61792caa9cdd1621b49c4b9d",
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
    "slug": "tasty",
    "url": "parse",
    "isDraft": true,
    "addedBy": "6179186894c816c40ae15987",
    "createdAt": "2021-10-27T10:40:42.873Z",
    "updatedAt": "2021-10-27T10:40:42.873Z",
    "isDeleted": false,
    "isActive": true,
    "id": "61792caa9cdd1621b49c4b9d"
  }
}
```

A request which violates validation given in the model file:

Here in the Blog model, the "alternativeHeadline" field can not be a number, it should be a string. So if pass invalid data, then a response will look like a given response

Status code: <e className="delete method">422</e>

```js
{
  "status": "VALIDATION_ERROR",
  "message": "Invalid values in parameters, \"alternativeHeadline\" must be a string",
  "data": {}
}
```

## Create Bulk Blogs

To add multiple Blogs to the database.

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/addBulk`

#### Sample Request

#### JSON
```js
{
  "data": [
    {
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
    },
    {
      "title": "Tasty2",
      "alternativeHeadline": "User-friendlyness",
      "image": "Orchestrators",
      "publishDate": "Direct2",
      "author": {
        "name": "Samantha Hermana IV",
        "image": "payments",
        "email": "Cecil_Renner75@yahoo.com"
      },
      "publisher": {
        "name": "Gustavo Wcman",
        "url": "Concrete-stone",
        "logo": "reboot-machine"
      },
      "articleSection": "Home-2",
      "articleBody": "Accounts",
      "description": "redefined",
      "slug": "Island",
      "url": "parsed",
      "isDraft": true
    }
  ]
}
```

#### cURL
```js
curl -X 'POST' \
  '<Base URL>/client/api/v1/blog/addBulk' \
  -H 'accept: application/json' \
  -H 'Authorization: Bearer {token}' \
  -H 'Content-Type: application/json' \
  -d '{
  "data": [
    {
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
    },
    {
      "title": "Tasty2",
      "alternativeHeadline": "User-friendlyness",
      "image": "Orchestrators",
      "publishDate": "Direct2",
      "author": {
        "name": "Samantha Hermana IV",
        "image": "payments",
        "email": "Cecil_Renner75@yahoo.com"
      },
      "publisher": {
        "name": "Gustavo Wcman",
        "url": "Concrete-stone",
        "logo": "reboot-machine"
      },
      "articleSection": "Home-2",
      "articleBody": "Accounts",
      "description": "redefined",
      "slug": "Island",
      "url": "parsed",
      "isDraft": true
    }
  ]
}'
```
#### Nodejs-Axois

```js
var axios = require('axios');
var data = JSON.stringify({
  "data": [
    {
      "data": [
        {
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
        },
        {
          "title": "Tasty2",
          "alternativeHeadline": "User-friendlyness",
          "image": "Orchestrators",
          "publishDate": "Direct2",
          "author": {
            "name": "Samantha Hermana IV",
            "image": "payments",
            "email": "Cecil_Renner75@yahoo.com"
          },
          "publisher": {
            "name": "Gustavo Wcman",
            "url": "Concrete-stone",
            "logo": "reboot-machine"
          },
          "articleSection": "Home-2",
          "articleBody": "Accounts",
          "description": "redefined",
          "slug": "Island",
          "url": "parsed",
          "isDraft": true
        }
      ]
    }
  ]
});

var config = {
  method: 'post',
  url: '<Base URL>/client/api/v1/blog/addBulk',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer {token}'
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
      "isDraft": true,
      "id": "617921bb256df40a522b81ae",
      "_id": "617921bb256df40a522b81ae",
      "createdAt": "2022-07-27T19:29:12.653Z",
      "updatedAt": "2022-08-09T11:44:55.574Z",
      "isDeleted": false,
      "isActive": true
    },
    {
      "title": "Tasty2",
      "alternativeHeadline": "User-friendlyness",
      "image": "Orchestrators",
      "publishDate": "Direct2",
      "author": {
        "name": "Samantha Hermana IV",
        "image": "payments",
        "email": "Cecil_Renner75@yahoo.com"
      },
      "publisher": {
        "name": "Gustavo Wcman",
        "url": "Concrete-stone",
        "logo": "reboot-machine"
      },
      "articleSection": "Home-2",
      "articleBody": "Accounts",
      "description": "redefined",
      "slug": "Island",
      "url": "parsed",
      "isDraft": true,
      "id": "617921bb256df40a522b81af",
      "_id": "617921bb256df40a522b81af",
      "createdAt": "2022-07-27T19:29:12.653Z",
      "updatedAt": "2022-08-09T11:44:55.574Z",
      "isDeleted": false,
      "isActive": true
    }
  ]
}
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).