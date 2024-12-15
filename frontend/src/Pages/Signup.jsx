import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../CreateContext";
import bgLogin from "../Images/bgLogin.jpg";

function Signup() {
  const navigate = useNavigate();
  const [cred, setCred] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const c = useContext(myContext);

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { password, confirmPassword } = cred;

    if (password !== confirmPassword) {
      c.showAlert("Passwords do not match");
      return;
    }

    const result = await c.signUp(cred.username, cred.email, cred.password);

    if (result === true) {
      setCred({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/");
    }
  };

  return (
    <>
      <div
        className="complete_screen d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${bgLogin})`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="login_box container rounded shadow py-4 px-3"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            maxWidth: "400px",
            width: "100%",
          }}
        >
          <h3 className="text-center mb-4" style={{ fontFamily: "Kanit" }}>
            Sign Up
          </h3>

          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              id="username"
              onChange={onChange}
              value={cred.username}
              style={{ fontFamily: "Kanit" }}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              id="email"
              onChange={onChange}
              value={cred.email}
              style={{ fontFamily: "Kanit" }}
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              id="password"
              onChange={onChange}
              value={cred.password}
              style={{ fontFamily: "Kanit" }}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label
              htmlFor="confirmPassword"
              className="form-label fw-semibold"
            >
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={onChange}
              value={cred.confirmPassword}
              style={{
                fontFamily: "Kanit",
                borderColor:
                  cred.password === cred.confirmPassword ? "" : "red",
              }}
              required
            />
          </div>

          {/* Sign Up Button */}
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
              style={{
                fontFamily: "Kanit",
                backgroundImage: `url(${bgLogin})`,
                backgroundSize: "cover",
                color: "white",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-3">
            <span style={{ color: "grey", fontSize: "14px" }}>
              Already have an account?{" "}
              <Link
                to="/"
                className="text-decoration-none"
                style={{ color: "black", fontSize: "14px" }}
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
