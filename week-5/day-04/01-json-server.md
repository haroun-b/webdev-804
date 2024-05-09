# 01. Mock Backend Using json-server

**< [Home](../../README.md) / [Week 5](../README.md)**

---

To create a mock backend server, we can use `json-server`. It is a simple tool that allows us to create a REST API using a JSON file.

## Setup

1. Create a new directory for your backend. eg. `my-backend`
2. Inside the directory, run `npm init` to create a new `package.json` file
3. Install `json-server` by running `npm install json-server`
4. Create a new JSON file for your data. eg. `db.json` with the following structure:

```json
{
  "collection-1": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "Description 2"
    }
  ],
  "collection-2": [
    {
      "id": 1,
      "name": "Item 1",
      "description": "Description 1"
    },
    {
      "id": 2,
      "name": "Item 2",
      "description": "Description 2"
    }
  ]
}
```

**Each key in the JSON file represents a collection and would be used as the endpoint for the API.**

5. Add the following script to your `package.json` file:

```json
...
"scripts": {
  "start": "npx json-server db.json"
}
...
```

6. Run the server by running `npm start`
7. You can also serve static files like images for example by adding a directory with the name `public` to your project, and any files in that directory will be served by the server.

**More On json-server in the [Official Documentation](https://github.com/typicode/json-server)**

## Example Usage

**[json-server-backend-example](./json-server-backend-example/)**
