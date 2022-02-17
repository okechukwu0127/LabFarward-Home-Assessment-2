import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NextPageAction, IntroForm } from "./../../store/actions/FormAction";
import "./styles.scss";

function FormUserSignup({
  pageTitle,
  FormFeed,
  submitButtonText,
  previousButton,
}) {
  // redux
  const dispatch = useDispatch();

  // get Redux store values for formUserSignup
  const Form = useSelector((state) => state.FormFeed); // for previous button

  const currentStage = FormFeed.FormStage; // for previous button
  const FormSignup = FormFeed.FormSignup; // for previous button
  const formstageName = FormFeed.FormSignup?.name;

  const formstageRole = FormFeed.FormSignup?.role;

  const formstageTimes = FormFeed.FormSignup?.times;

  console.log("FormSignup", FormSignup);
  console.log("Form", Form);

  // form values initial state
  const [formData, setFormData] = useState({
    name: formstageName || "",
    role: formstageRole || "",
    times: formstageTimes || "",
    //password: formstagePass || "",
  });

  // form values onchange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // form validation checks
  const [errors, setErrors] = useState({});
  const validate = (formData) => {
    let formErrors = {}; // set form errors to none at start

    // name
    if (!formData.name) {
      formErrors.name = "Name required";
    }

    // email
    const emailRegex = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );
    /* if (!formData.email || !emailRegex.test(formData.email)) {
      formErrors.email = "Valid Email required";
    } */

    // password
    const passwordRegex = new RegExp(
      "(?=.*[a-z])+(?=.*[A-Z])+(?=.*[0-9])+(?=.{10,})"
    );
    /* if (!formData.password || !passwordRegex.test(formData.password)) {
      formErrors.password =
        "The minimum password length is 10 characters and must contain at least 1 lowercase letter, 1 uppercase letter and 1 number)";
      //console.log(formData.password.length)
    } */

    return formErrors;
  };

  const [isSubmitted, setIsSubmitted] = useState(false); // state for sent status
  // onsubmit
  const handleSubmit = (e) => {
    e.preventDefault(); // stop form submission
    setErrors(validate(formData)); // check errors
    setIsSubmitted(true); // update submit status
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      // check if any form errors

      // update Redux Slice
      dispatch(
        NextPageAction(2) // update formStage
      );

      dispatch(
        IntroForm({
          name: formData.name,
          role: formData.role,
          times: formData.times,
        })
      );
    }
  }, [formData, isSubmitted, dispatch, errors]);
  // console.log(errors, formData)

  return (
    <>
      <h2>{pageTitle || "Signup"}</h2>

      <form
        name="form-signup"
        id="form-signup"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p>
          <label htmlFor="name">
            name<span className="required-asterix">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            aria-label="name"
            aria-required="true"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </p>
        {errors.name && <span className="error-message">{errors.name}</span>}

        <p>
          <label htmlFor="role">role</label>
          <input
            type="text"
            id="role"
            name="role"
            autoComplete="role"
            aria-label="role"
            aria-required="false"
            placeholder="eg. software developer"
            value={formData.role}
            onChange={handleChange}
          />
        </p>

        <p>
          <label htmlFor="times">Number of readings</label>
          <input
            type="number"
            id="times"
            name="times"
            //defaultValue={5}
            autoComplete="times"
            aria-label="times"
            aria-required="false"
            placeholder="eg. 5"
            value={formData.times}
            readOnly
            onChange={handleChange}
          />
        </p>

        <div className="btn-array">
          {previousButton && (
            <p>
              <input
                
                type="submit"
                value={`Back`}
                onClick={() => dispatch(NextPageAction(currentStage - 1))}
              />
            </p>
          )}
          <p>
            <input data-submit-signup="" type="submit" value={submitButtonText || "Submit"} />
          </p>
        </div>
      </form>
    </>
  );
}

export default FormUserSignup;
