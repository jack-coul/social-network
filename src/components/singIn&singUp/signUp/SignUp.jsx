import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../../../redux/features/application";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [message, setMessage] = useState("");
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
  const handleSignUp = () => {

    
    if (password === passwordTwo) {
      dispatch(registerUser(firstname, lastname, login, email, password));
      setMessage("Регистрация прошла успешно");
    } else {
      setMessage("Пароли не совпадают");
    }
  };
  return (
    <div>
      <div className="form-two">
        <div className="form-panel two">
          <div className="form-header">
            <h1>Регистрация</h1>
          </div>
          <div className="form-content">
        
              <div className="form-group">
                <label for="username">Имя</label>
                <input
                  id="username"
                  type="text"
                  name="username"
                  required="required"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              
              </div>
              <div className="form-group">
                <label for="password">фамилия</label>
                <input
                  id="password"
                  type="text"
                  name="password"
                  required="required"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="cpassword">логин</label>
                <input
                  id="cpassword"
                  type="text"
                  name="cpassword"
                  required="required"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  value={email}
                  onChange={(e) => handleValidEmail(e)}
                />
                <span className="validLog">{validEmail}</span>
              </div>
              <div className="form-group">
                <label for="email">пароль</label>
                <input
                  id="email"
                  type="password"
                  name="email"
                  required="required"
                  value={password}
                  onChange={(e) => handleValidPassword(e)}
                />
                <span className="validLog">{validPassword}</span>
              </div>
              <div className="form-group">
                <label for="email">подтвердите пароль</label>
                <input
                  id="email"
                  type="password"
                  name="email"
                  required="required"
                  value={passwordTwo}
                  onChange={(e) => setPasswordTwo(e.target.value)}
                />
                <span className="validLog">{message}</span>
              </div>
              
              <div className="form-group">
                <button type="submit" onClick={handleSignUp}>
                  Регистрация
                </button>
                <Link to='/signin' type="submit">
                  есть аккаунт
                </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
