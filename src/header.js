import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <div>
        <header
          className="navbar navbar-expand-lg navbar-light bg-light"
          style={{
            position: "absolute",
            width: "1520px",
            height: "50px",
            left: "-5px",
            top: "0px",
          }}
        >
          <div class="collapse navbar-collapse">
            <a href="index3.html" className="brand-link">
              <img
                src="/dist/img/xpr1.png"
                alt="AdminLTE Logo"
                className="brand-image"
                style={{
                  width: "188px",
                  height: "75px",
                  left: "8px",
                  top: "10px",
                }}
              />
            </a>
            <ul className="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="fakeUrl" class="nav-link">
                  <img
                    src="/dist/img/plus.png"
                    class="rounded-circle"
                    alt="User Image"
                  />
                  Ajouter Documents
                </a>
              </li>
              <li
                className="nav-item dropdown user user-menu"
                style={{ top: "18px" }}
              >
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                  <img
                    src="/dist/img/user2-160x160.jpg"
                    class="user-image"
                    alt="User Image"
                  />
                  <span>Mohamed Amine</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <div className="dropdown-divider"></div>
                  <a href="fake_url" className="dropdown-item">
                    <i className="fas fa-id-card mr-2"></i>
                    Profile
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="fake_url" className="dropdown-item">
                    <i class="fas fa-power-off mr-2"></i>
                    Deconnexion
                  </a>
                </div>
              </li>

              <li className="nav-item dropdown" style={{ top: "15px" }}>
                <a className="nav-link" data-toggle="dropdown" href="fake_url">
                  <i className="far fa-bell"></i>
                  <span className="badge badge-warning navbar-badge">15</span>
                </a>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                  <span className="dropdown-item dropdown-header">
                    15 Notifications
                  </span>
                  <div className="dropdown-divider"></div>
                  <a href="fake_url" className="dropdown-item">
                    <i className="fas fa-envelope mr-2"></i> 4 new messages
                    <span className="float-right text-muted text-sm">
                      3 mins
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="fake_url" className="dropdown-item">
                    <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">
                      12 hours
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="fake_url" className="dropdown-item">
                    <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">
                      2 days
                    </span>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="fake_url" className="dropdown-item dropdown-footer">
                    See All Notifications
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}
