import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import bgLogin from "../Images/bgLogin.jpg";
import myContext from "../CreateContext";

function Login() {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const c = useContext(myContext);

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const result = await c.login(cred.email, cred.password);
    if (result === true) {
      setCred({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <div
        className="complete_screen d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${bgLogin})`,
          backgroundRepeat: "no-repeat",
          height: "99vh",
        }}
      >
        <div
          className="login_box container rounded py-4 px-3"
          style={{ backgroundColor: "white", width: "auto" }}
        >
          <div className="fs-4 fw-bold top text-center my-2">Login</div>
          <div
            className="mb-3 row my-2 d-flex flex-column fw-semibold"
            style={{ fontSize: "12px" }}
          >
            <label
              htmlFor="staticEmail"
              className="col-sm-2 col-form-label mx-3"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="fw-bold fs-6 form-control-plaintext mx-3 px-1 border-bottom"
                placeholder="Enter your email"
                name="email"
                onChange={onChange}
                value={cred.email}
                style={{ fontFamily: "Kanit" }}
              />
            </div>
          </div>
          <div
            className="mb-3 row my-2 d-flex flex-column fw-semibold"
            style={{ fontSize: "12px" }}
          >
            <label
              htmlFor="inputPassword"
              className="col-sm-2 col-form-label mx-3"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="fw-bold form-control-plaintext mx-3 px-1 border-bottom"
                id="inputPassword"
                name="password"
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    handleSubmit();
                  }
                }}
                onChange={onChange}
                value={cred.password}
                placeholder="Type your password"
              />
            </div>
          </div>
          <div className="col-auto text-center my-5">
            <button
              type="submit"
              className="btn btn-primary border-0"
              style={{
                width: "20vw",
                color: "rgb(64, 63, 61)",
                backgroundImage: `url(${bgLogin})`,
              }}
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
          <div
            className="havent mx-5 my-2"
            style={{ color: "grey", fontSize: "14px" }}
          >
            Haven't signed up?{" "}
            <Link
              to="/signup"
              className="text-decoration-none"
              style={{ color: "black", fontSize: "14px" }}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
