import { useState } from "react";

function Form({ handleSubmit }) {
  const emptyForm = {
    title: "",
    description: ""
  };
  const [formData, setFormData] = useState(emptyForm);

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
          cols="30"
          rows="10"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </label>

      <input
        type="submit"
        value="Submit"
      />
    </form>
  );
}

export default Form;
