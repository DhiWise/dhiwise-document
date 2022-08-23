---
sidebar_position: 1
---

# Log In using Social Authentication

DhiWise will provide authentication APIs which will help users to log in using listed social platforms:

- Google

- Facebook

- LinkedIn

- GitHub


**API URL:** <e className="post method">POST</e> `<Base URL>/<Platform>/auth/login/<Social Platform>`

- **Base URL**: URL of a server where your application is running. For example: http://localhost:5000

- **Platform**: Name of the platform where you have configured social authentication

- **Social Platform**: name of the social media platform using which you want to log in. 

It can be any of these - google, linkedin, github, facebook

The above URL will redirect the user to the web page where the user can enter the credentials of a specific social platform.

#### Sample success response:

Status code: `200`

```js
{
  "status": "SUCCESS",
  "message": "Login successful.",
  "data": {
    "loginRetryLimit": 0,
    "_id": "6179186894c816c40ae15988",
    "username": "Lester.Weber42",
    "email": "Lester.Weber42@gmail.com",
    "role": 1,
    "createdAt": "2021-10-27T09:14:16.940Z",
    "updatedAt": "2021-10-27T09:14:16.940Z",
    "isDeleted": false,
    "isActive": true,
    "id": "6179186894c816c40ae15988",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzkxODY4OTRjODE2YzQwYWUxNTk4OCIsInVzZXJuYW1lIjoiTGVzdGVyLldlYmVyNDIiLCJpYXQiOjE2MzU0MTY0MDcsImV4cCI6MTYzNjAxNjQwN30.IhWt3B6bnt7pXXEl8Qdgtu48TQ0Q7TUYQ4rawCzBaq8"
  }
}
```

#### Sample failure response:

Status code: <e className="delete method">400</e>

```js
{
  "status": "BAD_REQUEST",
  "message": "Login failed.",
  "data": {}
}
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).