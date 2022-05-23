import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/register.css";

function Register() {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    gender: "",
    email: "",
  });

  const [passreg, setPassreg] = useState({
    password: "",
  });

  const handleCahnge = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleCahngePassword = (e) => {
    setPassreg({
      ...passreg,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    window.localStorage.setItem("register", JSON.stringify(register));
    window.localStorage.setItem("password", JSON.stringify(passreg));
    navigate("/");
  };

  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4 register-content">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Register</h1>
              <div>
                <label>Full Name :</label>
                <input
                  type="text"
                  placeholder="Input Full Name"
                  name="name"
                  value={register.name}
                  onChange={handleCahnge}
                />
              </div>
              <div>
                <label>Gender :</label>
                <input
                  type="text"
                  placeholder="Change Gender"
                  name="gender"
                  value={register.gender}
                  onChange={handleCahnge}
                />
              </div>
              <div>
                <label>Email :</label>
                <input
                  type="text"
                  placeholder="Input Email"
                  name="email"
                  value={register.email}
                  onChange={handleCahnge}
                />
              </div>
              <div>
                <label>Password :</label>
                <input
                  type="text"
                  placeholder="Input Password"
                  name="password"
                  value={register.password}
                  onChange={handleCahngePassword}
                />
              </div>
              <button>Register</button>
              <p>
                already have an account? <span>Log In</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
