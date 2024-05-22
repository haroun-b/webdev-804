# 01. Express Query And Params

**< [Home](../../README.md) / [Week 7](../README.md)**

---

## ExpressJS Path Params

In Express, we can define routes that include parameters. These parameters are used to capture values specified at the end of the URL. For example, if we have a route that looks like this:

```javascript
app.get("/users/:userId", (req, res) => {
  console.log(req.params); // { userId: '123' }
});
```

When we make a request to `/users/123`, the `req.params` object will contain the value `123` for the key `userId`. We can use this value to query a database, fetch data, or perform any other operation we need to do.

## ExpressJS Query

In addition to path parameters, we can also use query parameters in Express. Query parameters are used to pass data to the server in the URL. For example, if we have a route that looks like this:

```javascript
app.get("/users", (req, res) => {
  console.log(req.query); // {age: '30', city: 'Paris'}
});
```

When we make a request to `/users?age=30&city=Paris`, the `req.query` object will contain the values `30` for the key `age` and `Paris` for the key `city`. We can use these values to filter data, or perform any other operation we need to do.

### Array Query Parameters

If we want to pass an array as a query parameter, we can do so by using the same key multiple times in the URL. For example, if we have a route that looks like this:

```javascript
app.get("/users", (req, res) => {
  console.log(req.query); // {city: ['Paris', 'London', 'Dublin']}
});
```

When we make a request to `/users?city=Paris&city=London&city=Dublin`, the `req.query` object will contain an array of values `['Paris', 'London', 'Dublin']` for the key `city`.

**Note that unlike path parameters, query parameters are optional and can be omitted from the URL.**

## [Example](./express-query-and-params/index.js)
