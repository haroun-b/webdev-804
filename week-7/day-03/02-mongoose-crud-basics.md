# 02. Mongoose CRUD Basics

**< [Home](../../README.md) / [Week 7](../README.md)**

---

## Connecting To MongoDB

Before we can start using Mongoose to interact with MongoDB, we need to connect to the database. We can do this by using the `mongoose.connect()` method. Here's an example of how to connect to a MongoDB database using Mongoose:

```javascript
const mongoose = require("mongoose");

async function connectDB() {
  try {
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/example-db");

    console.log("Connected to DB: ", db.connection.name);
  } catch (error) {
    console.error("Error connecting to DB: ", error);
  }
}
connectDB();
```

## Creating A Mongoose Model

In Mongoose, a model is a class that represents a collection in the database. We can create a model by using the `mongoose.model()` method. Here's an example of how to create a model `User` for the users collection:

```javascript
// models/User.model.js

const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true }
});

// `age` is used as example only, in real-world applications, it's better to use a date of birth field

const User = model("User", userSchema);

module.exports = User;
```

## Creating A Document

To create a new User document, we can use the `create()` method on the model.

```javascript
const User = require("./models/User.model.js");

//...
// creating a new user
const newUser = await User.create({
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com"
});
//...
```

## Reading Documents

To read documents from the database, we can use the `find()`, `findById()`, and `findOne()` methods on the model.

```javascript
const User = require("./models/User.model.js");

//...
// finding many users
const allUsers = await User.find();
const all30YearOlds = await User.find({ age: 30 });
//...

//...
// finding one user by id
const userById = await User.findById("664de7f03ed18622c26bb833");
const userById2 = await User.findOne({ _id: "664de7f03ed18622c26bb833" });
//...

//...
// finding one user by a unique field
const user = await User.findOne({ email: "john.doe@example.com" });
//...
```

## Updating Documents

To update documents in the database, we can use the `findOneAndUpdate()`, `updateMany()`, and `findByIdAndUpdate()` methods on the model.

```javascript
const User = require("./models/User.model.js");

//...
// updating one user by id
await User.findByIdAndUpdate("664de7f03ed18622c26bb833", {
  age: 31
});
//...

//...
// updating one user by a unique field
const updatedUser = await User.findOneAndUpdate(
  { email: "john.doe@example.com" }, // query
  { age: 32 }, // update
  { new: true } // returns the updated document
);

// by default, an update returns the original document
//...

//... updating many users
await User.updateMany({ age: 30 }, { age: 31 });
//...
```

## Deleting Documents

To delete documents from the database, we can use the `findOneAndDelete()`, `deleteMany()`, and `findByIdAndDelete()` methods on the model.

```javascript
const User = require("./models/User.model.js");

//...
// deleting one user by id
await User.findByIdAndDelete("664de7f03ed18622c26bb833");
//or
await User.findOneAndDelete({ _id: "664de7f03ed18622c26bb833" });
//...

//...
// deleting one user by a unique field
await User.findOneAndDelete({ email: "john.doe@example.com" });
//...

//...
// deleting many users
await User.deleteMany({ age: 31 });
//...
```

## Reading A Document With Populated Fields

In Mongoose, we can use the `populate()` method to retrieve documents from the database with populated fields. Here's an example of how to populate a field `posts` in a `User` document:

```javascript
// models/Post.model.js

const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true, maxlength: 300}
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

const Post = model("Post", postSchema);

module.exports = Post;
```

```javascript
const Post = require("./models/Post.model.js");
//...
// finding a post without the author populated
const post = await Post.findById("5f7e7f03ed18622c26bb833");

console.log(post);
/*
{
  _id: "5f7e7f03ed18622c26bb833",
  title: "My First Post",
  content: "This is my first post",
  author: "664de7f03ed18622c26bb833"
}
*/
//...

//...
// finding a post with the author populated
const populatedPost = await Post.findById("5f7e7f03ed18622c26bb833").populate(
  "author"
);

console.log(populatedPost);
/*
{
  _id: "5f7e7f03ed18622c26bb833",
  title: "My First Post",
  content: "This is my first post",
  author: {
    _id: "664de7f03ed18622c26bb833",
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
  }
}
*/
//...
```

## [Example](./mongoose/index.js)

## [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
