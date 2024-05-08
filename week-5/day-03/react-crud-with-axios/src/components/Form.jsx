import { useState } from "react";

function Form({ handleSubmit, data, type }) {
  const emptyForm = {
    title: "",
    description: ""
  };
  const [formData, setFormData] = useState(data ?? emptyForm);

  // `??` is the nullish coalescing operator: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

  function handleChange(e) {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  }

  return (
    <form
      method="post"
      className="pico"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(formData);
      }}
    >
      <label>
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Description
        <textarea
          name="description"
          id="description"
          cols="20"
          rows="2"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </label>

      <input
        type="submit"
        value={`${data ? "Update" : "Add"} ${type}`}
      />
    </form>
  );
}

export default Form;
