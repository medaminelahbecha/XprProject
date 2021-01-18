import React, { Component } from "react";
import "./menu.css";

export default class menu extends Component {
  render() {
    return (
      <div className="side-menu-desktop">
        <aside
          class="main-sidebar elevation-4 sidebar-light-lightblue "
          style={{ position: "relative" }}
          data-widget="pushmenu"
        >
          <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="/template/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User"
                />
              </div>
              <div className="info">
                <a href="fake_url" className="d-block">
                  Mohamed Amine
                </a>
              </div>
            </div>

            <nav className="mt-1">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item has-treeview menu-open">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>Dashboard</p>
                  </a>
                </li>

                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-copy"></i>
                    <p>Scaner</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-car"></i>
                    <p>Frais Personelle</p>
                  </a>
                </li>
                <li className="nav-item has-treeview">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-newspaper"></i>
                    <p>Plan Comptable</p>
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="fake_url" className="nav-link">
                    <i className="nav-icon fas fa-cog"></i>
                    <p>
                      Parametre
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/forms/general.html" className="nav-link">
                        <i className="nav-icon fas fa-copy"></i>
                        <p>Organisation</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/advanced.html" className="nav-link">
                        <i className="nav-icon fas fa-user-friends"></i>
                        <p>Accé Utilisateur</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/editors.html" className="nav-link">
                        <i className="nav-icon fas fa-user-shield"></i>
                        <p>Permission et Role</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/forms/validation.html"
                        className="nav-link"
                      >
                        <i className="nav-icon fas fa-bezier-curve"></i>
                        <p>Gerer les catégories</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="pages/forms/validation.html"
                        className="nav-link"
                      >
                        <i className="nav-icon fas fa-file-alt"></i>
                        <p>Plan comptable</p>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    );
  }
}
