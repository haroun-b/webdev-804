# 02. React Controlled Forms

**< [Home](../../README.md) / [Week 4](../README.md)**

---

## What are Controlled Forms?

In React, forms are controlled components. This means that the form data is handled by the React component itself. The form data is stored in the component's state and is updated using the `onChange` event handler.

## Creating a Controlled Form

To create a controlled form:

1. Create a form element with input fields.
2. Add a `value` attribute to the input fields and set it to the value stored in the component's state.
3. Add an `onChange` event handler to the input fields to update the state when the input changes.
4. Add an `onSubmit` event handler to the form element to handle form submission.

**Basic Example:**

```jsx
// ControlledForm.jsx

function ControlledForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // this prevents page reload

    // Handle form submission...
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
}
```

### Multiple Input Fields, One State

We can use a single state object to store the values of all our input fields.

**Example:**

```jsx
// ControlledForm.jsx

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  function handleSubmit(e) {
    e.preventDefault(); // this prevents page reload

    // Handle form submission...
  }

  function handleChange(e) {
    const inputEl = e.target;

    setFormData({
      ...formData,
      [inputEl.name]: inputEl.value
    });
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
    >
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onChange={handleChange}
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onChange={handleChange}
        />
      </label>

      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          // onChange={(e) => setFormData({ ...formData, password: e.target.value }
          onChange={handleChange}
        />
      </label>

      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
}
```
