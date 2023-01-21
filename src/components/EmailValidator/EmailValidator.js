import * as yup from "yup";
import { schema } from "../../helpers/validation";
import { useState, useEffect } from "react";
const initialState = {
  email: "",
};
const initialErrors = {
  email: "",
};
const initialDisabled = true;

const EmailValidator = () => {
  const [email, setEmail] = useState(initialState);
  console.log(email);
  const [emailErrors, setEmailErrors] = useState(initialErrors);
  console.log(emailErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  console.log(disabled);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setEmailErrors({ ...emailErrors, [name]: "" }))
      .catch((err) =>
        setEmailErrors({ ...emailErrors, [name]: err.errors[0] })
      );
  };

  const inputChange = (name, value) => {
    validate(name, value);
    setEmail({
      ...email,
      [name]: value,
    });
  };

  const handleChange = (e) => {
    setEmail({
      [e.target.name]: e.target.value,
    });
    inputChange(e.target.name, e.target.value);
  };

  useEffect(() => {
    schema.isValid(email).then((valid) => setDisabled(!valid));
  }, [email, emailErrors, schema]);

  const clear = (e) => {
    e.preventDefault();
    setEmail(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clear(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs mx-auto mt-20">
          <label className="label">
            <span className="label-text">Enter here:</span>
          </label>
          <input
            type="text"
            name="email"
            value={email.email}
            onChange={handleChange}
            placeholder="Email address to verify"
            className="input input-bordered w-full max-w-xs input-primary"
          />
          <label className="label"></label>
          <button disabled={disabled} className="btn btn-primary">
            Validate
          </button>

          <button onClick={clear} className="btn btn-secondary mt-6">
            Clear Form
          </button>
        </div>
      </form>
      <div className="form-control w-full max-w-xs mx-auto mt-7"></div>
    </div>
  );
};

export default EmailValidator;
