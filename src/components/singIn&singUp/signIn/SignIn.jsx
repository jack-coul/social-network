import React from "react";

const SignIn = () => {
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
                />
                <span class="validLog">неверное что-то там</span>
              </div>
              <div class="form-group">
                <label class="form-remember">
                  <input type="checkbox" />
                  Remember Me
                </label>
                <a class="form-recovery" href="#">
                  Forgot Password?
                </a>
              </div>
              <div class="form-group">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="pen-footer">
        <a
          href="https://www.behance.net/gallery/30478397/Login-Form-UI-Library"
          target="_blank"
        >
          <i class="material-icons">arrow_backward</i>View on Behance
        </a>
        <a
          href="https://github.com/andyhqtran/UI-Library/tree/master/Login%20Form"
          target="_blank"
        >
          View on Github<i class="material-icons">arrow_forward</i>
        </a>
      </div>
    </div>
  );
};

export default SignIn;
