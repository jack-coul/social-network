import React from "react";

const SignUp = () => {
  return (
      <div>
    <div className="form-two">
      <div class="form-panel two">
        <div class="form-header">
          <h1>Регистрация</h1>
        </div>
        <div class="form-content">
          <form>
            <div class="form-group">
              <label for="username">Имя</label>
              <input
                id="username"
                type="text"
                name="username"
                required="required"
              />
              <span class="validLog">неверное что-то там</span>
            </div>
            <div class="form-group">
              <label for="password">фамилия</label>
              <input
                id="password"
                type="text"
                name="password"
                required="required"
              />
              <span class="validLog">неверное что-то там</span>
            </div>
            <div class="form-group">
              <label for="cpassword">логин</label>
              <input
                id="cpassword"
                type="text"
                name="cpassword"
                required="required"
              />
              <span class="validLog">неверное что-то там</span>
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input id="email" type="email" name="email" required="required" />
              <span class="validLog">неверное что-то там</span>
            </div>
            <div class="form-group">
              <label for="email">пароль</label>
              <input id="email" type="password" name="email" required="required" />
              <span class="validLog">неверное что-то там</span>
            </div>
            <div class="form-group">
              <label for="email">подтвердите пароль</label>
              <input id="email" type="password" name="email" required="required" />
              <span class="validLog">неверное что-то там</span>
            </div>
            
            <div class="form-group">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUp;
