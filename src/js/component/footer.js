import React, { Component } from "react";

export const Footer = () => (
  <div className="footer mt-auto text-center p-5 fixed-bottom">
    <p>FOLLOW STAR WARS:</p>
    <div className="social-links d-flex justify-content-center">
      <div>
        <a
          className="facebook"
          href="https://www.facebook.com/StarWars"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="facebook"
        >
          {" "}
          <i className="fab fa-facebook"></i>
        </a>
      </div>

      <div>
        <a
          className="instagram "
          href="https://www.instagram.com/starwars/"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="instagram"
        >
          {" "}
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div>
        <a
          className="twitter"
          href="https://twitter.com/starwars"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="twitter"
        >
          {" "}
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <div>
        <a
          className="youtube"
          href="https://www.youtube.com/user/starwars"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="youtube"
        >
          {" "}
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
    <div className="container-1">
      <div>
        <a
          className="benja"
          href="https://github.com/benjalonso"
          title="benjamin"
        >
          {" "}
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div>
        <a
          className="anye"
          href="https://github.com/AnyelinaParedes?tab=repositories"
          title="anye"
        >
          {" "}
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div>
        <a
          className="Manuel"
          href="https://github.com/Attackama-Bwoy"
          title="manuel"
        >
          {" "}
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  </div>
);
