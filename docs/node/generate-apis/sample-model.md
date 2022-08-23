---
sidebar_position: 0
---

# Sample Models

Here, you will find models used in documentation.

## Mongoose ORM Models

### User

```js title="model/user.js"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    username:{ type:String },
    password:{ type:String },
    email:{ type:String },
    name:{ type:String },
    isActive:{ type:Boolean },
    createdAt:{ type:Date },
    updatedAt:{ type:Date },
    addedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },
    updatedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },
    isDeleted:{ type:Boolean },
    loginOTP:{
      code:String,
      expireTime:Date
    },
    role:{
      type:Number,
      enum:convertObjectToEnum(USER_ROLE),
      required:true
    },
    resetPasswordLink:{
      code:String,
      expireTime:Date
    },
    loginRetryLimit:{
      type:Number,
      default:0
    },
    loginReactiveTime:{ type:Date }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt' 
    } 
  }
);
const user = mongoose.model('user',schema,'user');
module.exports = user;
```

### Blog

```js title="model/blog.js"
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema(
  {
    title:{ type:String },
    alternativeHeadline:{ type:String },
    image:{ type:String },
    publishDate:{ type:String },
    author:{
      name:{ type:String },
      image:{ type:String },
      email:{ type:String }
    },
    publisher:{
      name:{ type:String },
      url:{ type:String },
      logo:{ type:String }
    },
    articleSection:{ type:String },
    articleBody:{ type:String },
    description:{ type:String },
    slug:{ type:String },
    url:{ type:String },
    isDraft:{ type:Boolean },
    isDeleted:{ type:Boolean },
    isActive:{ type:Boolean },
    createdAt:{ type:Date },
    updatedAt:{ type:Date },
    updatedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    },
    addedBy:{
      type:Schema.Types.ObjectId,
      ref:'user'
    }
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt' 
    } 
  }
);
const Blog = mongoose.model('Blog',schema,'Blog');
module.exports = Blog;modemodelmodel/
```

<br/>
<br/>

Got a question? [**Ask here**](https://discord.com/invite/rFMnCG5MZ7).