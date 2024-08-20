import classes from "./Checkout.module.css";
import { useState } from "react";

const Checkout = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    postal: "",
    city: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const formValidate = () => {
    const errors = {};
    const fields = ["name", "street", "postal", "city"];
    fields.forEach((field) => {
      if (formData[field].trim() === "") {
        errors[field] = `Please enter your ${field}`;
      } else if (field === "postal" && formData[field].trim().length !== 5) {
        errors.postal = "Please enter a valid postal code (5 characters)";
      }
    });
    return errors;
  };

  const confirmHandler = (event) => {
    event.preventDefault();
    const errors = formValidate();
    setFormErrors(errors);
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      {["name", "street", "postal", "city"].map((field) => (
        <div
          key={field}
          className={`${classes.control} ${
            formErrors[field] ? classes.invalid : ""
          }`}
        >
          <label htmlFor={field}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type="text"
            id={field}
            value={formData[field]}
            onChange={(e) =>
              setFormData({ ...formData, [field]: e.target.value })
            }
          />
        </div>
      ))}
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
