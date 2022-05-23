import React, { useState } from "react";
import CorouselLogin from "./CorouselLogin";
import "../style/login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  });
  const dataRegister = JSON.parse(window.localStorage.getItem("register"));
  const passwordRegister = JSON.parse(window.localStorage.getItem("password"));
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (
      dataLogin.email === dataRegister.email &&
      dataLogin.password === passwordRegister.password
    ) {
      alert("login success");
      window.localStorage.setItem("isLogin", true);
      navigate("/home");
    } else {
      alert("Login Unsuccess");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-7 pmb-cor">
            <CorouselLogin />
          </div>
          <div className="col-md-4 offset-md-1 login-content">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center">Login</h1>
              <div>
                <label>Email :</label>
                <input
                  type="email"
                  value={dataLogin.email}
                  onChange={(e) =>
                    setDataLogin({ ...dataLogin, email: e.target.value })
                  }
                />
              </div>
              <div className="mt-2">
                <label>Password :</label>
                <input
                  type="password"
                  value={dataLogin.password}
                  onChange={(e) =>
                    setDataLogin({ ...dataLogin, password: e.target.value })
                  }
                />
              </div>
              <p className="text-center">
                don't have an account?{" "}
                <span>
                  <Link className="text-danger fw-bold" to="/register">
                    Register
                  </Link>
                </span>
              </p>
              <button>Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
