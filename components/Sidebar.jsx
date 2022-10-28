import React from "react";

function Sidebar() {
  return (
    <div>
      {/* <!-- sidebar --> */}
      <aside class="sidebar" id="sidebar">
        <div>
          <button class="close-btn" id="close-btn">
            <i class="fas fa-times"> </i>
          </button>
          {/* <!-- nav links --> */}
          <ul class="sidebar-links">
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
          {/* <!-- social icons --> */}
          <ul class="social-icons">
            <li>
              <a
                href="https://www.facebook.com/glitchgatsby"
                class="social-icon"
              >
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/glitchgatsby"
                class="social-icon"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.soundcloud.com/glitch-gatsby"
                class="social-icon"
              >
                <i class="fab fa-soundcloud"></i>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* <!-- end of sidebar --> */}
    </div>
  );
}

export default Sidebar;
