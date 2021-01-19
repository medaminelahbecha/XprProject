import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
export default class register extends Component {
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
              <b>S'inscrire</b>
            </p>

            <form action="../../index3.html" method="post">
              <p class="email">Nom de l'organisation</p>
              <div class="input-group mb-3">
                <input type="text" class="form-control" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-university"></span>
                  </div>
                </div>
              </div>
              <p class="email">Email</p>
              <div class="input-group mb-2">
                <input type="text" class="form-control" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <p class="email">Nom</p>
              <div class="input-group mb-2">
                <input type="text" class="form-control" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user-circle"></span>
                  </div>
                </div>
              </div>
              <p class="email">Prénom</p>
              <div class="input-group mb-2">
                <input type="text" class="form-control" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-user-circle"></span>
                  </div>
                </div>
              </div>
              <p class="email">Numèro du Téléphone</p>
              <div class="input-group mb-2">
                <PhoneInput country={"us"} value="" />
              </div>
              <br />
              <div class="row">
                <div class="col-4">
                  <button type="submit" class="btn">
                    Suivant
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
