import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <div className="Contact">
        <h1 class="h1-contact" style={{ paddingTop: "12rem" }}>
          Contact
        </h1>
        <section class="social">
          <ul class="social-set">
            <li>
              <a
                class="sociali"
                href="https://twitter.com/?lang=en-id"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fa fa-twitter fa-fw" title="Twitter"></i>
              </a>
            </li>
            <li>
              <a
                class="sociali"
                href="https://github.com"
                target="_blank"
                aria-label="GitHub"
              >
                <i class="fa fa-github-square fa-fw" title="GitHub"></i>
              </a>
            </li>
            <li>
              <a
                class="sociali"
                href="https://www.youtube.com/index"
                target="_blank"
                aria-label="YouTube"
              >
                <i class="fa fa-youtube fa-fw" title="YouTube"></i>
              </a>
            </li>

            <li>
              <a
                class="sociali"
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fa fa-instagram fa-fw" title="Instagram"></i>
              </a>
            </li>
            <li>
              <a
                class="sociali"
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fa fa-facebook-square fa-fw" title="Facebook"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};
