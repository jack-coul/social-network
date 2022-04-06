import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../redux/features/application";

const SignUp = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
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
                <span className="validLog">неверное что-то там</span>
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
                <span className="validLog">неверное что-то там</span>
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
                <span className="validLog">неверное что-то там</span>
              </div>
              <div className="form-group">
                <label for="email">Email Address</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="validLog">неверное что-то там</span>
              </div>
              <div className="form-group">
                <label for="email">пароль</label>
                <input
                  id="email"
                  type="password"
                  name="email"
                  required="required"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="validLog">неверное что-то там</span>
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
                <span className="validLog">неверное что-то там</span>
              </div>
              <div>
                <span>{message}</span>
              </div>
              <div className="form-group">
                <button type="submit" onClick={handleSignUp}>
                  Register
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
