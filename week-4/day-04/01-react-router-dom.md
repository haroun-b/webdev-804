# 01. React Router DOM

**< [Home](../../README.md) / [Week 4](../README.md)**

---

In multi-page applications, navigation is accomplished by loading a new page (new HTML file), whereas in a single-page application (SPA) like React, navigation is achieved by updating the DOM of the same page.

While we can handle navigation using the `useState` hook and conditional rendering, there's an existing library called "React Router" that makes it easier.

## Setup and Usage

### 1. Create a new React app if you haven't already:

```sh
npm create vite@latest <project-name> -- --template react

cd <project-name>
npm install
```

### 2. Install React Router DOM:

```sh
npm install react-router-dom
```

### 3. In your `src/main.jsx` file, add `BrowserRouter`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
```

### 4. Add Routes in your `App.jsx` file:

```jsx
import { Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import AboutPage from ".pages/AboutPage.jsx";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </>
  );
}
```

### More Usage Examples

- [Basic Usage](./basic-routing/src/App.jsx)
- [Params and Search Params](./advanced-routing/src/App.jsx)
- [Nested Routes and Layout (external link)](https://reactrouter.com/en/main/route/route#layout-routes)

## Params and SearchParams

### Params

Params are dynamic segments of the URL that can be used to pass data to a component. For example, in the URL `/users/123`, `123` is a param that can be accessed in the component.

```jsx
<Route
  path="/users/:id"
  element={<UserPage />}
/>
```

```jsx
function UserPage() {
  const { id } = useParams();

  return <h1>User ID: {id}</h1>;
}
```

### SearchParams

SearchParams are query parameters that can be used to pass data to a component. For example, in the URL `/hotels?city=Paris&maxPrice=true`, `city` and `maxPrice` are search params that can be accessed in the component.

```jsx
<Route
  path="/hotels"
  element={<HotelsPage />}
/>
```

```jsx
function HotelsPage() {
  const [params] = useSearchParams();

  const city = params.get("city");
  const maxPrice = params.get("maxPrice");

  const filterHotels = hotels.filter((hotel) => {
    return (
      (city ? hotel.city === city : true) &&
      (maxPrice ? hotel.price <= Number(maxPrice) : true)
    );
  });

  return (
    <>
      <h1>Hotels</h1>
      <ul>
        {filterHotels.map((hotel) => (
          <li key={hotel.id}>{hotel.name}</li>
        ))}
      </ul>
    </>
  );
}
```

**SearchParams are optional. Meaning, users can specify all, some, or none of them, and the URL `/hotels` would still work**

#### useSearchParams vs useState

SearchParams are commonly used for search filters, and while we can achieve the same result using `useState`, `useSearchParams` is more convenient as it automatically updates the URL. Meaning, users can bookmark or share the URL with the search filters applied.
