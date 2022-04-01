import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/application";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = () => {
    dispatch(loginUser(email, password));
  };

  return (
    <div>
      <div class="form">
        <div class="form-panel one">
          <div class="form-header">
            <h1>Авторизация</h1>
          </div>
          <div class="form-content">
            <form>
              <div class="form-group">
                <label for="username">Email Address</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span class="validLog">неверное что-то там</span>
              </div>
              <div class="form-group">
                <label for="password">Пароль</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span class="validLog">неверное что-то там</span>
              </div>
              <div class="form-group">
                <label class="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <Link class="form-recovery" to="#">
                  Forgot Password?
                </Link>
              </div>
              <div class="form-group">
                <button type="submit" onClick={handleSignIn}>
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
