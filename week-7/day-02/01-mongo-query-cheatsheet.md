# 01. Mongo Query Cheatsheet

**< [Home](../../README.md) / [Week 7](../README.md)**

---

## Find (Filter)

Assuming we have a collection of movies with the following structure:

```json
{
  "_id": {
    "$oid": "664c80b3e5506b7e451e5697"
  },
  "title": "The Shawshank Redemption",
  "year": 1994,
  "genre": "Drama",
  "director": "Frank Darabont",
  "rating": 9.3
}
```

- _Find by ID_: `{_id: ObjectId('664c80b3e5506b7e451e5697')}`

- `$eq`: Matches values that are equal to a specified value. e.g. `{genre: {$eq: "Drama"}}` (`{genre: "Drama"}` also works). We can also filter on multiple fields: `{genre: "Drama", year: 1994}`
- `$ne`: Matches all values that are not equal to a specified value. e.g. `{genre: {$ne: "Drama"}}`
- `$gt`: Matches values that are greater than a specified value. e.g. `{rating: {$gt: 8.5}}`
- `$gte`: Matches values that are greater than or equal to a specified value. e.g. `{rating: {$gte: 8.5}}`
- `$lt`: Matches values that are less than a specified value. e.g. `{rating: {$lt: 8.5}}`
- `$lte`: Matches values that are less than or equal to a specified value. e.g. `{rating: {$lte: 8.5}}`
- `$and`: Combines multiple expressions for a logical AND operation. e.g. `{$and: [{rating: {$gte: 8.5}}, {rating: {$lte: 9.5}}]}`
- `$or`: Combines multiple expressions for a logical OR operation. e.g. `{$or: [{genre: "Drama"}, {genre: "Comedy"}]}`
- `$nor`: Combines multiple expressions for a logical NOR operation. e.g. `{$nor: [{genre: "Drama"}, {genre: "Comedy"}]}` this is the opposite of `$or` and will exclude all movies that are either "Drama" or "Comedy"

### Array Operators

Assuming we have a collection of restaurants with the following structure:

```json
{
  "_id": {
    "$oid": "664c737fe5506b7e451df389"
  },
  "address": {
    "building": "351",
    "coord": [-73.98513559999999, 40.7676919],
    "street": "West   57 Street",
    "zipcode": "10019"
  },
  "borough": "Manhattan",
  "cuisine": "Irish",
  "grades": [
    {
      "date": {
        "$date": "2014-09-06T00:00:00.000Z"
      },
      "grade": "A",
      "score": 2
    },
    {
      "date": {
        "$date": "2013-07-22T00:00:00.000Z"
      },
      "grade": "A",
      "score": 11
    },
    {
      "date": {
        "$date": "2012-07-31T00:00:00.000Z"
      },
      "grade": "A",
      "score": 12
    },
    {
      "date": {
        "$date": "2011-12-29T00:00:00.000Z"
      },
      "grade": "A",
      "score": 12
    }
  ],
  "name": "Dj Reynolds Pub And Restaurant",
  "restaurant_id": "30191841",
  "stars": 2,
  "reviews": 154,
  "capacity": 59,
  "tags": [
    "noisy restaurant",
    "too small",
    "culinary delights",
    "unforgettable experience"
  ]
}
```

- `$in`: Selects all documents where the value of a field equals ANY (Logical OR) value in the specified array. e.g. `{tags: {$in: ["culinary delights", "delicious food"]}}`
- `$nin`: Selects all documents where the field’s value is not in the specified array or the field does not exist. e.g. `{tags: {$nin: ["noisy restaurant", "too small"]}}`
- `$all`: Selects all documents where the value of a field is an array that contains all the specified elements. e.g. `{tags: {$all: ["delicious food", "reasonable prices"]}}`

- `$elemMatch`: Matches documents that contain an array field with at least one element that matches all the specified query criteria. e.g. `{grades: {$elemMatch: {score: {$gt: 10}}}}` (`{grades.score: {$gt: 10}}` also works) this will return all restaurants that have at least one grade with a score greater than 10.

## Projection

- `{name: 1, cuisine: 1}`: Only return the `name` and `cuisine` fields
- `{name: 0, cuisine: 0}`: Exclude both the `name` and `cuisine` fields and return all other fields
- `{name: 1, cuisine: 1, _id: 0}`: Exclude the `_id` field and return only the `name` and `cuisine` fields

## Sorting

- `{name: 1}`: Sort by `name` in ascending order
- `{name: -1}`: Sort by `name` in descending order

## Limit and Skip

Limit and skip are used for pagination. Limit is used to specify the number of documents to return and skip is used to specify the number of documents to skip.
