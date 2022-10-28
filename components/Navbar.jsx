import React from "react";

function Navbar() {
  return (
    <div>
      {/* <!-- navbar --> */}
      <nav class="nav" id="nav">
        <div class="nav-center">
          {/* <!-- nav header --> */}
          <div class="nav-header">
            <img
              src="./images/black-and-yellow-logo.svg"
              class="nav-logo"
              alt="nav logo"
            />
            <button class="nav-btn" id="nav-btn">
              <i class="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- nav links --> */}
          <ul class="nav-links">
            <li>
              <a href="/">home</a>
            </li>
            <li>
              <a href="about.html">about</a>
            </li>
            <li>
              <a href="media.html">media</a>
            </li>
            <li>
              <a href="contact.html">contact</a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- end of navbar --> */}
    </div>
  );
}

export default Navbar;
