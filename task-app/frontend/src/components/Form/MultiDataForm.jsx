import React, { useState } from "react";

const MultiDataForm = () => {
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    fileName: "",
    actualFile: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },

    touched: {
      firstName: false,
      lastName: false,
      email: false,
      tel: false,
    },
  });

  //validation

  const {
    firstName,
    lastName,
    email,
    country,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    fileName,
    actualFile,
    bio,
  } = state;

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setState({
        ...state,
        skills: {
          ...state.skills,
          [name]: checked,
        },
      });
    } else if (type === "file") {
      setState({
        ...state,
        fileName: value,
        actualFile: e.target.files,
      });
    } else {
      setState({
        ...state,
        [name]: value,
      });
    }
  }

  function blurHandler(e) {
    const { name } = e.target;
    setState({
      ...state,
      touched: {
        ...state.touched,
        [name]: true,
      },
    });
  }

  function validate({
    firstName,
    lastName,
    email,
    country,
    tel,
    dateOfBirth,
    favoriteColor,
    weight,
    gender,
    fileName,
    actualFile,
    bio,
  }) {
    let errors = {
      firstName: "",
      lastName: "",
      email: "",
      country: "",
      tel: "",
      dateOfBirth: "",
      favoriteColor: "",
      weight: "",
      gender: "",
      fileName: "",
      actualFile: "",
      bio: "",
    };

    if (!firstName) {
      errors.firstName = "First name is required";
    }

    return errors;
  }

  const errorExist = Object.values(errors);
  console.log(errorExist.every((item) => item === "") ? false : true);

  function handleSubmit(e) {
    e.preventDefault();

    const valError = validate({
      firstName,
      lastName,
      email,
      country,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      gender,
      fileName,
      actualFile,
      bio,
    });
    setErrors(valError);

    if (Object.values(valError).some((item) => item !== "")) {
      alert("All fields are required");
      return;
    }

    // submit after validation
    console.log(state, "state");
  }

  const options = [
    {
      value: "",
      label: "-- Select Country--",
    },
    {
      value: "Finland",
      label: "Finland",
    },
    {
      value: "Sweden",
      label: "Sweden",
    },
    {
      value: "Norway",
      label: "Norway",
    },
    {
      value: "Denmark",
      label: "Denmark",
    },
  ];

  // mapping the options to list(array) of JSX options

  const selectOptions = options.map(({ value, label }, i) => (
    <option key={i} value={value}>
      {" "}
      {label}
    </option>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group">
            {state.touched.firstName && state.firstName === "" && (
              <p className="text-[red]">Field is required</p>
            )}

            {errors.firstName && (
              <p className="text-[red]">{errors.firstName}</p>
            )}
            <label htmlFor="firstName">First Name </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              onBlur={blurHandler}
              placeholder="First Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name </label>
            <input
              type="text"
              name="lastName"
              value={state.lastName}
              onChange={handleChange}
              onBlur={blurHandler}
              placeholder="Last Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={blurHandler}
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group">
          {state.touched.tel && isNaN(Number(state.tel)) ? (
            setState({ ...state, tel: "" })
          ) : state.touched.tel && state.tel === "" ? (
            <p className="text-[red]">Field is required</p>
          ) : null}
          <label htmlFor="tel">Telephone </label>
          <input
            type="tel"
            name="tel"
            value={tel}
            onChange={handleChange}
            onBlur={blurHandler}
            placeholder="Tel"
          />
        </div>

        <div className="form-group">
          <label htmlFor="dateOfBirth">Date of birth </label>
          <input
            type="date"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={handleChange}
            placeholder="Date of Birth"
          />
        </div>
        <div className="form-group">
          <label htmlFor="favoriteColor">Favorite Color</label>
          <input
            type="color"
            id="color"
            name="color"
            value={favoriteColor}
            onChange={handleChange}
            placeholder="Favorite Color"
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight </label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={weight}
            onChange={handleChange}
            placeholder="Weight in Kg"
          />
        </div>
        <div>
          <label htmlFor="country">Country</label> <br />
          <select name="country" onChange={handleChange} id="country">
            {selectOptions}
          </select>
        </div>

        <div>
          <p>Gender</p>
          <div>
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={gender === "Female"}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              id="male"
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={gender === "Male"}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              id="other"
              type="radio"
              name="gender"
              value="Other"
              onChange={handleChange}
              checked={gender === "Other"}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>

        <div>
          <p>Select your skills</p>
          <div>
            <input
              type="checkbox"
              id="html"
              name="html"
              onChange={handleChange}
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="css"
              name="css"
              onChange={handleChange}
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="javascript"
              name="javascript"
              onChange={handleChange}
            />
            <label htmlFor="javascript">JavaScript</label>
          </div>
        </div>
        <div>
          <label htmlFor="bio">Bio</label> <br />
          <textarea
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
            cols="120"
            rows="10"
            placeholder="Write about yourself ..."
          />
        </div>

        <div>
          <input
            multiple
            type="file"
            name="fileName"
            value={fileName}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            style={{
              backgroundColor: errorExist.every((item) => item === "")
                ? "blue"
                : "red",
            }}
            type="submit"
            disabled={errorExist.every((item) => item === "") ? false : true}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiDataForm;
