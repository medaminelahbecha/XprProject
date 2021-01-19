import React, { Component } from "react";
import "./login.css";
export default class login extends Component {
  render() {
    return (
      <div>
        <body>
          <nav class="navbar navbar-dark bg-light">
            <a class="navbar-brand" href="#">
              <img
                src="/template/img/xpr1.png"
                width="188"
                height="38px"
                alt=""
              />
            </a>
          </nav>
          <div class="card-body">
            <p class="connexion">
              <b>Connexion</b>
            </p>

            <form action="../../index3.html" method="post">
              <p class="email">Email</p>

              <div class="input-group mb-2">
                <input type="text" class="form-control" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <p class="email">Mot de passe</p>
              <div class="input-group mb-2">
                <input type="password" class="form-control" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <br />
              <br />
              <p>
                <a href="forgot-password.html">
                  Mot de passe perdu? <b>Recevoir un nouveau mot de passe</b>
                </a>
              </p>
              <br />
              <br />
              <div class="row">
                <div class="col-4">
                  <button type="submit" class="btn">
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </body>
      </div>
    );
  }
}
