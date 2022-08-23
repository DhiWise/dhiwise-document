---
sidebar_position: 0
---

# User Managment APIs

By the end of this document, you will know how to use user management APIs generated from the DhiWise.
The DhiWise provides listed APIs for user management:

- <a href="#register-user">Register user</a>

- <a href="#login">Login</a>

- <a href="#reset-password">Reset password</a>

- <a href="#forgot-password">Forget password</a>

- <a href="#validate-otp">Validate OTP</a>

If you have configured Two-factor authentication then you have to use the following API for Log-in.

- <a href="#send-login-otp">Send login OTP</a>

- <a href="#login-with-otp">Login with OTP</a>


How Two-Factor Authentication Work

1. A user enters "username" and "password".

2. API will <a href="#send-login-otp">send OTP</a> on email or on mobile if the user exists.

3. Next, we will <a href="#validate-otp">validate OTP</a> that is entered by a user.

4. If OTP is valid then we will give a JWT token in response, else login will get failed.

A <a href="/docs/node/generate-apis/sample-model">user</a> model will be our reference model for this documentation. 

:::note

`Change <Base URL> with the URL where your server is running.
For example: http://localhost:5000`

:::

## Register User

To register a user on any platform.

**API URL:** <e className="post method">POST</e> `<Base URL>/admin/auth/register`

#### Sample request:

#### **JSON**

```js
{
    "username": "Consuelo.Cole",
    "password": "ExNa2RIyhAqVtSU",
    "email": "Alexie20@yahoo.com",
    "name": "Joanna Nicolas"
}
```

#### **cURL**
```js
curl -X 'POST' \
  '<Base URL>/admin/auth/register' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "Consuelo.Cole",
  "password": "ExNa2RIyhAqVtSU",
  "email": "Alexie20@yahoo.com",
  "name": "Joanna Nicolas"
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "username": "Consuelo.Cole",
  "password": "ExNa2RIyhAqVtSU",
  "email": "Alexie20@yahoo.com",
  "name": "Joanna Nicolas"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/auth/register',
  headers: { 
    'accept': 'application/json', 
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
  "data": {
    "username": "Consuelo.Cole",
    "email": "Alexie20@yahoo.com",
    "name": "Joanna Nicolas",
    "id": "617921bb256df40a522b81ba",
    "_id": "617921bb256df40a522b81ba",
    "loginRetryLimit": 0,
    "createdAt": "2022-05-22T13:23:42.877Z",
    "updatedAt": "2022-09-18T05:58:52.842Z",
    "isDeleted": false,
    "isActive": true
  }
}
```


#### Sample response if data is duplicate:

Status code: <e className="delete method">422</e>

```js
{
  "status": "VALIDATION_ERROR",
  "message": "User Registration Failed, Duplicate Data found",
  "data": {}
}
```

## Forgot Password

**API URL**: <e className="post method">POST</e> ```<Base URL>/admin/auth/forgot-password```

If you want to provide functionality that if a user has forgotten his/her password then they can recreate their new password.

#### Sample request:

#### **JSON**
```js
{
  "email": "yourmail@gmail.com"
}
```

#### **cURL**
```js
curl -X 'POST' \
  '<Base URL>/admin/auth/forgot-password' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "email": "yourmail@gmail.com"
}'
```

#### **Nodejs - Axios**
```js
var axios = require('axios');
var data = JSON.stringify({
  "email": "yourmail@gmail.com"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/auth/forgot-password',
  headers: { 
    'accept': 'application/json', 
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
  "data": "otp successfully send to your email."
}
```
#### Sample response if the given email is not present in the database:

Status code: `200`

```js
{
  "status": "RECORD_NOT_FOUND",
  "message": "Record not found with specified criteria.",
  "data": {}
}
```
## Validate OTP

To validate the OTP before we ask for a new password from the user.

**API URL**: <e className="post method">POST</e> ```<Base URL>/admin/auth/validate-otp```

#### Sample request

#### JSON
```js
{
  "otp": "5898"
}
```

#### cURL
```js
curl -X 'POST' \
  '<Base URL>/admin/auth/validate-otp' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "otp": "5898"
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "otp": "5898"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/auth/validate-otp',
  headers: { 
    'accept': 'application/json', 
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

#### Sample response:

**If OTP is valid and not expired**

Status code: `200`

```js
{
  "status": "SUCCESS",
  "message": "Otp verified",
  "data": {}
}
```
**If OTP is invalid**

Status code: `200`

```js
{
  "status": "FAILURE",
  "message": "Invalid OTP",
  "data": {}
}
```

**If OTP is expired**

```js
{
  "status": "FAILURE",
  "message": "Your reset password link is expired or invalid",
  "data": {}
}
```
## Reset Password

To allow users to reset password

API URL: <e className="put method">PUT</e> ```<Base URL>/admin/auth/reset-password```


#### Sample request

#### JSON
```js
{
  "code": "5898",
  "newPassword": "yourPassword"
}
```

#### cURL
```js
curl -X 'PUT' \
  '<Base URL>/admin/auth/reset-password' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "code": "5898",
  "newPassword": "yourPassword"
}'
```


#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "code": "5898",
  "newPassword": "yourPassword"
});

var config = {
  method: 'put',
  url: '<Base URL>/admin/auth/reset-password',
  headers: { 
    'accept': 'application/json', 
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

#### Sample response:

If OTP is correct and the password is updated.

Status code: `200`

```js
{
  "status": "SUCCESS",
  "message": "Your request is successfully executed",
  "data": "Password reset successfully"
}
```

If OTP is invalid

Status code: `200`

```
{
  "status": "FAILURE",
  "message": "Invalid Code",
  "data": {}
}
```

## Login

To verify the user before we allow the user to access our resource.


**API URL:** <e className="post method">POST</e> `<Base URL>/admin/auth/login`

#### **JSON**

```
{
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml"
}
```

#### **cURL**
```js
curl -X 'POST' \
  '<Base URL>/admin/auth/login' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml"
}'
```


#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/auth/login',
  headers: { 
    'accept': 'application/json', 
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
  "message": "Login successful.",
  "data": {
    "loginRetryLimit": 0,
    "_id": "6179186894c816c40ae15988",
    "username": "Lester.Weber42",
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

If user credentials are incorrect:

Status code: <e className="delete method">400</e>

```js
{
  "status": "BAD_REQUEST",
  "message": "Login failed.",
  "data": {}
}
```

:::info
If you have configured Two-factor authentication then you will have to use the following APIs for login.
:::


![Example banner](../img/two-factor.png)

## Send Login OTP

Before user login, this API will send OTP on registered email/mobile.

**API URL**: <e className="post method">POST</e> ```<Base URL>/admin/auth/send_login_otp```

#### Sample request:

#### **JSON**
```js
{
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml"
}
```

#### **cURL**
```js
curl -X 'POST' \
  '<Base URL>/admin/auth/send_login_otp' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml"
}'
```


#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/auth/send_login_otp',
  headers: { 
    'accept': 'application/json', 
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

#### Sample response:

If user credentials are valid

Status code: `200`

```js
{
  "status": "SUCCESS",
  "message": "Login Successful",
  "data": "Please check your email/mobile for OTP"
}
```

If user credentials are invalid

Status code: `200`

```js
{
  "status": "FAILURE",
  "message": "User not found",
  "data": {}
}
```

## Login with OTP

Once the user receives OTP, then this API will take OTP with credentials and validate OTP.


**API URL:** <e className="post method">POST</e> `<Base URL>/admin/auth/login_with_otp`

#### Sample Request

#### **JSON**

```js
{
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml",
  "otp": "1234"
}
```

#### **cURL**
```js
curl -X 'POST' \
  '<Base URL>/admin/auth/login_with_otp' \
  -H 'accept: application/json' \
  -H 'Content-Type: application/json' \
  -d '{
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml",
  "otp": "1234"
}'
```

#### Nodejs - Axios
```js
var axios = require('axios');
var data = JSON.stringify({
  "username": "Lester.Weber42",
  "password": "ncx1AfID8cNysml",
  "otp": "1234"
});

var config = {
  method: 'post',
  url: '<Base URL>/admin/auth/login_with_otp',
  headers: { 
    'accept': 'application/json', 
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
#### Sample response:

If OTP is valid:

Status code: `200`

```js
{
  "status": "SUCCESS",
  "message": "Login successful.",
  "data": {
    "loginRetryLimit": 0,
    "_id": "6179186894c816c40ae15988",
    "username": "Lester.Weber42",
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

If OTP is invalid:
Status code: <e className="delete method">400</e>

```js
{
  "status": "BAD_REQUEST",
  "message": "Invalid Code",
  "data": {}
}
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).