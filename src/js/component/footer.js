import React, { Component } from "react";

export const Footer = () => (
  <div className="footer mt-auto  text-center p-5">
    <p>FOLLOW STAR WARS:</p>
    <ul className="social-links d-flex justify-content-center">
      <li>
        <a
          href="https://www.facebook.com/StarWars"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="facebook"
        >
          {" "}
          <i class="fab fa-facebook"></i>
        </a>
      </li>
      
      <li>
        <a
          classname="instagram"
          href="https://www.instagram.com/starwars/"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="instagram"
        >
        <i class="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a
          classname="twitter"
          href="https://twitter.com/starwars"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="twitter"
        >
          <i class="fab fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          classname="youtube"
          href="https://www.youtube.com/user/starwars"
          target="_blank"
          rel="noopener noreferrer"
          data-cto="social"
          title="youtube"
        >
        <i class="fab fa-youtube"></i>
        </a>
      </li>
    </ul>
    <span classname="sw-kids-container">
      <a
        classname="sw-kids"
        href="https://starwarskids.com/"
        target="_blank"
        title="Star Wars Kids"
        data-cto="swkids"
      >
    
      </a>
    </span>
  </div>
);
