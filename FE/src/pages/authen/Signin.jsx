import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./authen.css";
import logo from "../../assets/images/play.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState("");
  // handle login error when calling apis
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      formIsValid = false;
      setEmailError("Email Not Valid");
      return false;
    } else {
      setEmailError("");
      formIsValid = true;
    }
    if (!password.match(/^.{6,}$/)) {
      formIsValid = false;
      setpasswordError("Password must be at least 6 characters");
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const signinSubmit = (e) => {
    e.preventDefault();
    const isValid = handleValidation();
    if (isValid) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
          email,
          password,
        })
        .then((res) => {
          const token = res.data;
          localStorage.setItem(
            "user",
            JSON.stringify({
              access_token: token.accessToken,
              refresh_token: token.refreshToken,
            })
          );
          navigate("/");
        })
        .catch((err) => {
          console.log({ err });
          setErrorMessage(err.response.data.message);
        });
    }
  };

  const hidePopup = () => {
    let closebtn = document.querySelector(".closebtn");
    return (closebtn.parentElement.style.display = "none");
  };

  return (
    <div className="App">
      {errorMessage && (
        <div className="alert text-center">
          <span className="closebtn" onClick={hidePopup}>
            &times;
          </span>
          {errorMessage}
        </div>
      )}
      <div className="container-fluid" >
        <div className="row justify-content-center">
          <div className="background-signin col-12">
            <div className="row justify-content-between">
              <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-6 col-sm-0 d-none d-md-block">
                <div className="p-5 text-light fs-6">
                  powered by
                  <b> HCMUT</b>
                </div>
              </div>
              <div className="col-xxl-2 col-xxl-offset-4 col-xl-3 col-xl-offset-5 col-lg-4 col-lg-offset-4 col-md-4 col-md-offset-2">
                <div className="p-5 text-light">
                  <p className="theSolution">
                    the
                    <b> SOLUTION</b>
                  </p>
                  for urban disposal
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-md-2 col-sm-4 justify-content-end mt-6 ">
                <img src={logo} width="200" height="200"></img>
              </div>
              <div className="col-xxl-6 col-xl-6 fs-1 text-light mt-8">
                <b>URBAN WASTE </b>
                <div class="w-100"></div>
                collection aid
              </div>
            </div>
          </div>
          <div className="row mt-xl-n20 mt-xxl-n20 mt-n20 justify-content-end">
            <div className="col-xxl-6 col-xl-4 col-lg-5 col-md-6 col-xl-offset-7 col-xxl-offset-4 col-lg-offset-4 col-sm-12 mt-4">
              <div className="card-body">
                <form
                  method="post"
                  className="text-start"
                  id="loginform"
                  onSubmit={signinSubmit}
                >
                  <div className="input-group input-group-static mb-4">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder="Email"
                    />
                    <small id="emailHelp" className="text-danger form-text">
                      {emailError}
                    </small>
                  </div>
                  <div className="input-group input-group-static mb-4">
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      id="pwd_login"
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="Password"
                    />
                    <small id="passworderror" className="text-danger form-text">
                      {passwordError}
                    </small>
                  </div>
                  {/* TODO: handle submit */}
                  <div className="col d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn signin-btn mt-3 mb-0 text btn-outline-light"
                      style={{
                        fontSize: "30px",
                        opacity: 100,
                      }}
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div className=" mx-auto text-center">
                <Link
                  to="/signup"
                  className="signup-text font-weight-bold text-decoration-underline"
                  style={{ color: "#00c16e" }}
                >
                  Create new account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
