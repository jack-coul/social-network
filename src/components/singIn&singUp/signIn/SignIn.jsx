import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/application";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = () => {
    console.log(1);
    dispatch(loginUser(email, password));
  };
  const { loading, message } = useSelector((state) => state.application);

  return (
    <div>
      <div className="form">
        <div className="form-panel one">
          <div className="form-header">
            <h1>Авторизация</h1>
          </div>
          <div className="form-content">
            <form>
              <div className="form-group">
                <label for="username">Email Address</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="validLog">неверное что-то там</span>
              </div>
              <div className="form-group">
                <label for="password">Пароль</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="validLog">неверное что-то там</span>
              </div>
              <div className="form-group">
                <label className="form-remember">
                  <input type="checkbox" />
                  запомнить меня
                </label>
                <Link className="form-recovery" to="#">
                  Забыл пароль?
                </Link>
                <span>{loading && message}</span>
              </div>
              <div className="form-group">
                <Link to="#" onClick={handleSignIn}>
                  Войти
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
