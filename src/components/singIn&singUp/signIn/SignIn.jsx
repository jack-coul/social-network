import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/application";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail]= useState('')
  const [validPassword, setValidPassword] = useState('')
  const dispatch = useDispatch();

  const handleValidPassword = (e)=>{
    setPassword(e.target.value)
    const re1 = /(?=.*[!@#$%^&*])/; //- строка содержит хотя бы один спецсимвол;
    const re2 = /[0-9a-zA-Z!@#$%^&*]{6,}/; // - не меньше шести символов
    if (!re2.test(e.target.value)) {
      setValidPassword("Пароль должен не меньше шести символов");
    } else if (!re1.test(String(e.target.value))) {
      setValidPassword("Пароль должен содержать хотя бы один спецсимвол");
    } else {
      setValidPassword("");
    }
  }

  const handleValidEmail = (e)=>{
    setEmail(e.target.value);
    const emailValid =
      /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
    if (!emailValid.test(String(e.target.value))) {
      setValidEmail("Недопустимый майл");
    } else {
      setValidEmail("");
    }
  }


  const handleSignIn = () => {
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
              <div className="form-group">
                <label for="username">Email Address</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                  value={email}
                  onChange={(e) => handleValidEmail(e)}
                />
                <span className="validLog">{validEmail}</span>
              </div>
              <div className="form-group">
                <label for="password">Пароль</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required="required"
                  value={password}
                  onChange={(e) => handleValidPassword(e)}
                />
                <span className="validLog">{validPassword}</span>
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
              <div className="form-group1">
                <Link to="#" onClick={handleSignIn}>
                  Войти
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
