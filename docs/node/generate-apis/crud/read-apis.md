---
sidebar_position: 1
---

# Read APIs

DhiWise provides 4 APIs which can help to get records from a database.

<div className="grid grid-cols-2 gap-20">
    <a className="Card" href="#get-blog-by-id">
      <h4>Get document by Id</h4>
    </a>
    <a className="Card" href="#get-blog-by-id-with-populate-and-selection">
      <h4>Get document by Id with populate and select</h4>
    </a>
    <a className="Card" href="#get-count-of-documents">
      <h4>Get document count</h4>
    </a>
    <a className="Card" href="#find-documents-using-filter">
      <h4>Find document by filter</h4>
    </a>
</div>


## Get Blog by Id

To find a record from a collection using Id.


**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/:id`

#### Sample request:

#### **cURL**

```js
curl --location --request GET '<Base URL>/client/api/v1/blog/617f7d11fb3eb63160d22b62' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer <token>'
```

#### Nodejs - Axios
```js
var axios = require('axios');

var config = {
  method: 'get',
  url: '<Base URL>/client/api/v1/blog/617f7d11fb3eb63160d22b62',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer {token}'
  }
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
        "updatedAt": "2021-11-01T06:25:00.143Z",
        "isDeleted": false,
        "isActive": true,
        "updatedBy": "6179186894c816c40ae15988",
        "id": "617f7d11fb3eb63160d22b62"
    }
}
```

#### Sample response where "id' passed in path param does not exist in a database

Status code: `200`

```js
{
    "status": "RECORD_NOT_FOUND",
    "message": "Record not found with specified criteria.",
    "data": {}
}
```

## Get Blog by Id with populate and selection

To get a record of a collection by Id and in addition, you can have a populated record and only selected fields.

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/:id`

#### Sample request:

#### **JSON**

```js
{
  "populate": [
    {
      "path": "addedBy",
      "select": [
        "username",
        "email"
      ]
    }
  ],
  "select": [
    "title",
    "alternativeHeadline",
    "image",
    "publishDate",
    "author",
    "publisher"
  ]
}
```

#### **cURL**
```js
curl --location --request POST '<Base URL>/client/api/v1/blog/617f7d11fb3eb63160d22b62' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
  "populate": [
    {
      "path": "addedBy",
      "select": [
        "username",
        "email"
      ]
    }
  ],
  "select": [
    "title",
    "alternativeHeadline",
    "image",
    "publishDate",
    "author",
    "publisher"
  ]
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "populate": [
    {
      "path": "addedBy",
      "select": [
        "username",
        "email"
      ]
    }
  ],
  "select": [
    "title",
    "alternativeHeadline",
    "image",
    "publishDate",
    "author",
    "publisher"
  ]
});

var config = {
  method: 'post',
  url: '<Base URL>/client/api/v1/blog/617f7d11fb3eb63160d22b62',
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

#### Sample response:

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
        "addedBy": {
            "_id": "6179186894c816c40ae15988",
            "username": "Lester.Weber42",
            "email": "Lester.Weber42@gmail.com",
            "id": "6179186894c816c40ae15988"
        },
        "id": "617f7d11fb3eb63160d22b62"
    }
}
```

## Get count of documents

To get the total count of a record available in the collection, based on a filter passed in the request body.


**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/count`


#### Sample request:

#### **JSON**

```js
{
  "where": {
    "isActive": true
  }
}
```

#### **cURL**
```js
curl --location --request POST '<Base URL>/client/api/v1/blog/count' \
--header 'Content-Type: application/json' \
--header 'Authorization: Bearer {token}' \
--data-raw '{
  "where": {
    "isActive": true
  }
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "where": {
    "isActive": true
  }
});

var config = {
  method: 'post',
  url: '<Base URL>/client/api/v1/blog/count',
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
        "totalRecords": 3
    }
}
```

Sample failure response where no record exists in a database that satisfies a condition

Status code: `200`


## Find Documents using filter

To find a record from a collection using filters.

**API URL:** <e className="post method">POST</e> `<Base URL>/client/api/v1/blog/list`

#### Sample request:

#### **JSON**

```js
{
    "query:{ },
    "options":{},
    "isCountOnly":true
}
```
#### **JSON**

```js

{
    "query": {
        "alternativeHeadline": {
            "$eq": "diamond"
        },
        "views": {
            "$gte": 3,
            "$gt":4
        },
        "publishDate": {
            "$lt": "2022-12-12T07:41:47.320Z"
        },
        "createdAt": {
            "$lte": "2021-12-12T07:41:47.320Z"
        },
        "articleBody":{"$in":["invoice","bills"]},
        "image":{"$nin":["static","fixed"]}
    },
    "isCountOnly": false
}
```

#### **cURL**
```js
curl --location --request POST '<Base URL>/admin/blog/list' \
--header 'Accept: */*' \
--header 'Authorization: Bearer {token}' \
--header 'Cache-Control: no-cache' \
--header 'Connection: keep-alive' \
--header 'Content-Length: 923' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "$or": [
            {
                "alternativeHeadline": {
                    "$eq": "diamondw"
                }
            },
            {
                "views": {
                    "$gte": 3,
                    "$gt": 4
                }
            }
        ],
        "$and": [
            {
                "publishDate": {
                    "$lt": "2022-12-12T07:41:47.320Z"
                }
            },
            {
                "createdAt": {
                    "$lte": "2021-12-12T07:41:47.320Z"
                }
            }
        ],
        "articleBody": {
            "$in": [
                "invoice",
                "bills"
            ]
        },
        "image": {
            "$not": {
                "$nin": [
                    "dynamic",
                    "moving"
                ]
            }
        }
    },
    "isCountOnly": false
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "query": {
    "$or": [
      {
        "alternativeHeadline": {
          "$eq": "diamond"
        }
      },
      {
        "views": {
          "$gte": 3,
          "$gt": 4
        }
      }
    ],
    "$and": [
      {
        "publishDate": {
          "$lt": "2022-12-12T07:41:47.320Z"
        }
      },
      {
        "createdAt": {
          "$lte": "2021-12-12T07:41:47.320Z"
        }
      }
    ],
    "articleBody": {
      "$in": [
        "invoice",
        "bills"
      ]
    },
    "image": {
      "$not": {
        "$nin": [
          "dynamic",
          "moving"
        ]
      }
    }
  },
  "isCountOnly": false
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/blog/list',
  headers: { 
    'Accept': '*/*',
    'Authorization': 'Bearer {token}', 
    'Cache-Control': 'no-cache', 
    'Connection': 'keep-alive', 
    'Content-Length': '923', 
    'Content-Type': 'application/json
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

## Find all with logical operators


#### **JSON**

```js
{
    "query": {
        "$or": [
            {
                "alternativeHeadline": {
                    "$eq": "diamondw"
                }
            },
            {
                "views": {
                    "$gte": 3,
                    "$gt": 4
                }
            }
        ],
        "$and": [
            {
                "publishDate": {
                    "$lt": "2022-12-12T07:41:47.320Z"
                }
            },
            {
                "createdAt": {
                    "$lte": "2021-12-12T07:41:47.320Z"
                }
            }
        ],
        "articleBody": {
            "$in": [
                "invoice",
                "bills"
            ]
        },
        "image": {
            "$not": {
                "$nin": [
                    "dynamic",
                    "moving"
                ]
            }
        }
    },
    "isCountOnly": false
}
```

#### **cURL**
```js
curl --location --request POST '<Base URL>/admin/blog/list' \
--header 'Accept: */*' \
--header 'Authorization: Bearer {token}' \
--header 'Cache-Control: no-cache' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "$or": [
            {
                "alternativeHeadline": {
                    "$eq": "diamondw"
                }
            },
            {
                "views": {
                    "$gte": 3,
                    "$gt": 4
                }
            }
        ],
        "$and": [
            {
                "publishDate": {
                    "$lt": "2022-12-12T07:41:47.320Z"
                }
            },
            {
                "createdAt": {
                    "$lte": "2021-12-12T07:41:47.320Z"
                }
            }
        ],
        "articleBody": {
            "$in": [
                "invoice",
                "bills"
            ]
        },
        "image": {
            "$not": {
                "$nin": [
                    "dynamic",
                    "moving"
                ]
            }
        }
    },
    "isCountOnly": false
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "query": {
    "$or": [
      {
        "alternativeHeadline": {
          "$eq": "diamondw"
        }
      },
      {
        "views": {
          "$gte": 3,
          "$gt": 4
        }
      }
    ],
    "$and": [
      {
        "publishDate": {
          "$lt": "2022-12-12T07:41:47.320Z"
        }
      },
      {
        "createdAt": {
          "$lte": "2021-12-12T07:41:47.320Z"
        }
      }
    ],
    "articleBody": {
      "$in": [
        "invoice",
        "bills"
      ]
    },
    "image": {
      "$not": {
        "$nin": [
          "dynamic",
          "moving"
        ]
      }
    }
  },
  "isCountOnly": false
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/blog/list',
  headers: { 
    'Accept': '*/*', 
    'Authorization': 'Bearer {token}',
    'Content-Type': 'application/json', 
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

Sample success response when `"isCountOnly": false`:

Status code: `200`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "data": [
            {
                "author": {
                    "name": "Pat O'Keefe",
                    "image": "Chair",
                    "email": "Breanna.Schumm@gmail.com"
                },
                "publisher": {
                    "name": "Martin Conroy",
                    "url": "collaborative",
                    "logo": "Dam"
                },
                "_id": "6180f8776c001b64a0fe443f",
                "title": "Diamond",
                "alternativeHeadline": "diamond",
                "image": "dynamic",
                "publishDate": "2021-12-12T07:41:47.320Z",
                "articleSection": "primary",
                "articleBody": "invoice",
                "description": "Kwacha",
                "views": 4010,
                "url": "portals",
                "isDraft": true,
                "addedBy": "6180f448c14f8355766bdb32",
                "createdAt": "2021-11-02T08:36:07.621Z",
                "updatedAt": "2021-11-02T08:36:07.621Z",
                "isDeleted": false,
                "isActive": true,
                "cities": [
                    "surat",
                    "navsari",
                    "valsad"
                ],
                "id": "6180f8776c001b64a0fe443f"
            }
        ],
        "paginator": {
            "itemCount": 1,
            "offset": 0,
            "perPage": 10,
            "pageCount": 1,
            "currentPage": 1,
            "slNo": 1,
            "hasPrevPage": false,
            "hasNextPage": false,
            "prev": null,
            "next": null
        }
    }
}
```

Sample success response when `"isCountOnly": true`

Status code: `200`

```js
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "totalRecords": 3
    }
}
```

#### Sample failure response


Status code: `200`

```js
{
    "status": "RECORD_NOT_FOUND",
    "message": "Record not found with specified criteria.",
    "data": {}
}
```


## Options object for request body

<h3>Options</h3>

- **collation** :  {Object} - Specify the collation <a href="https://www.mongodb.com/docs/manual/reference/collation/" target="_blank">Documentation</a>

- **projection** : {String | Object} - Get/set the current query projection.

- **lean**: {Boolean} - Should return plain javascript objects instead of Mongoose (Default Value : true)

- **leanWithId** : {Boolean} - If `lean` and `leanWithId` are `true`, adds `id` field with string representation of _id to every document

- **pagination** : {Boolean} - If `pagination` is set to false, it will return all docs without adding limit condition. (Default: True)

- **useEstimatedCount** - Enable <a href="https://www.mongodb.com/docs/manual/reference/method/db.collection.estimatedDocumentCount/" target="_blank">estimatedDocumentCount</a> for larger datasets. Does not count based on given query, so the count will match entire collection size. (Default: False)

- **useCustomCountFn** - Enable custom function for count datasets. (Default: False)

- **forceCountFn** - {Boolean} - Set this to true, if you need to support $geo queries. (Default: False)

- **read** -  {Object} - Determines the MongoDB nodes from which to read. Below are the available options.

- **customLabels** - {Object} - Developers can provide custom labels for manipulating the response data.

- **options** - {Object} - Options passed to Mongoose's find() function.

#### Sample request

#### **JSON**

```js
{
  "query": {},
  "options": {
    "projection":"title",
    "collation": { "locale": "fr" },
    "lean": false,
    "leanWithId": false,
    "pagination": true,
    "useEstimatedCount": false,
    "useCustomCountFn": false,
    "forceCountFn": false,
    "options": {}
  },
  "isCountOnly": false
}
```

#### **cURL**
```js
curl -X POST \
  <Base URL>/client/api/v1/blog/list \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer {token}' \
  -H 'Content-Type: application/json' \
  -d '{
  "query": {},
  "options": {
    "projection":"title",
    "collation": { "locale": "fr" },
    "lean": false,
    "leanWithId": false,
    "pagination": true,
    "useEstimatedCount": false,
    "useCustomCountFn": false,
    "forceCountFn": false,
    "options": {}
  },
  "isCountOnly": false
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "query": {},
  "options": {
    "projection": "title",
    "collation": {
      "locale": "fr"
    },
    "lean": false,
    "leanWithId": false,
    "pagination": true,
    "useEstimatedCount": false,
    "useCustomCountFn": false,
    "forceCountFn": false,
    "options": {}
  },
  "isCountOnly": false
});

var config = {
  method: 'post',
  url: '<Base URL>/client/api/v1/blog/list',
  headers: {  
    'Authorization': 'Bearer {token}',  
    'Content-Type': 'application/json', 
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

#### Sample response:

Status code: `200`

```
{
    "status": "SUCCESS",
    "message": "Your request is successfully executed",
    "data": {
        "data": [
            {
                "_id": "6180f86a6c001b64a0fe443e",
                "title": "Saphire",
                "id": "6180f86a6c001b64a0fe443e"
            },
            {
                "_id": "6180f8776c001b64a0fe443f",
                "title": "Diamond",
                "id": "6180f8776c001b64a0fe443f"
            }
        ],
        "paginator": {
            "itemCount": 4,
            "offset": 0,
            "perPage": 10,
            "pageCount": 1,
            "currentPage": 1,
            "slNo": 1,
            "hasPrevPage": false,
            "hasNextPage": false,
            "prev": null,
            "next": null
        }
    }
}
```
<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).