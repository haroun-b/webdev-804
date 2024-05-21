# 02. Data Models

**< [Home](../../README.md) / [Week 7](../README.md)**

---

## Document Embedding vs. Document Referencing

In MongoDB, there are two ways to model relationships between documents: embedding and referencing.

### Document Embedding

In document embedding, we store related data in a single document. This is useful when the related data is not useful outside the context of the parent document. For example a user and their address:

```json
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  },
  "name": "John Doe",
  "email": "johndoe@example.com",
  "address": {
    "street": "123 Rue de La Republique",
    "city": "Paris",
    "country": "France"
  }
}
```

In this example, the address data is embedded in the user document. This is useful because the address data is not useful outside the context of the user document.

### Document Referencing

In document referencing, instead of embedding the related data, we store a reference to it. This is useful when the related data is useful outside the context of the parent document. For example a user and their many posts:

```json
// User
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  },
  "name": "John Doe",
  "email": "johndoe@example.com",
}

// Post
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5698"
  },
  "title": "Blog Post 1",
  "content": "This is the content of blog post 1",
  "authorId": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  }
}
```

In this example, the `authorId` field in the post document stores a reference to the user document. This is useful because the post data is useful outside the context of the user document.

### When to Use Document Embedding vs. Document Referencing

- **Document Embedding**: Use when the related data is not useful outside the context of the parent document. Also when the related data is small and does not grow unbounded.
- **Document Referencing**: Use when the related data is useful outside the context of the parent document. Or when the related data is large and can grow unbounded.

**One this to keep in mind is that in MongoDB the maximum document size is 16MB.**

Now let's imagine that every user can have up to 100 favourite books. If we know that the book object is small, we can embed the books directly into the user document.

```json
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  },
  "name": "John Doe",
  "email": "johndoe@example.com",
  "favBooks": [
    {
      "title": "Book 1",
      "author": "Author 1"
    },
    {
      "title": "Book 2",
      "author": "Author 2"
    }
  ]
}
```

The problem now is that we end up with a lot of duplicate data. If two users both like "Book 1", we have to store the book data twice. When this is the case, we can create a separate collection for the books and store references to the books in the user document.

```json
// User
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  },
  "name": "John Doe",
  "email": "johndoe@example.com",
  "favBooks": [
    {
      "$oid": "5f5b7b3e5506b7e451e5698"
    },
    {
      "$oid": "5f5b7b3e5506b7e451e5699"
    }
  ]
}

// Books
[
  {
    "_id": {
      "$oid": "5f5b7b3e5506b7e451e5698"
    },
    "title": "Book 1",
    "author": "Author 1"
  },
  {
    "_id": {
      "$oid": "5f5b7b3e5506b7e451e5699"
    },
    "title": "Book 2",
    "author": "Author 2"
  }
]
```

In this particular case, we know that the `favBooks` array will never grow beyond 100 books. So having an array of 100 references in the user document is not a problem.

## Model Relationships

When modeling relationships between documents in MongoDB, you have to consider the cardinality of the relationship. There are three types of cardinality:

### One-to-One

Each document in the collection is related to exactly one document in another collection.
![One-to-One](../../assets/one-to-one.png)

### One-to-Many

Each document in the collection is related to one or more documents in another collection.
![One-to-Many](../../assets/one-to-many.png)

### Many-to-Many

Each document in the collection is related to one or more documents in another collection, and each document in the other collection is related to one or more documents in the first collection.
![Many-to-Many](../../assets/many-to-many.png)

**In the case of a Many-to-Many relationship, we can either use an array of references or a separate collection to store the relationship.**

Like in the example above, assuming a club can have an unlimited number of users while a user can only be part of 100 clubs max, it would be resonable to store an array of references to the clubs inside the user's document.

If however, a user can be part of an unlimited number of clubs, we would need to create a separate collection to store the relationship between users and clubs.

```json
// User
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  },
  "name": "John Doe",
  "email": "johndoe@example.com",
}

// Club
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5698"
  },
  "name": "Club 1",
}

// ClubMembership
{
  "_id": {
    "$oid": "5f5b7b3e5506b7e451e5699"
  },
  "userId": {
    "$oid": "5f5b7b3e5506b7e451e5697"
  },
  "clubId": {
    "$oid": "5f5b7b3e5506b7e451e5698"
  }
}
```
