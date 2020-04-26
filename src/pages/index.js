import React from "react"
import { Link } from "gatsby"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"

export default () => (
  <div class="main-main">
    <div class="main-header">
      <h1>
        I’m Mert! I’m a designer, <br></br>researcher and educator.
      </h1>
      <p class="main-header-info">
        I design games, digital experiences. I like to work at the intersection
        of design and technology. I’m a PhD researcher at METU and a full-time
        lecturer at TOBB ETU.
        <br></br>
        <br></br>
        Take a look at a selection of my projects or learn more
        <Link to="/index"> about me.</Link>
      </p>
    </div>
    <div class="main-projects">
      
      <div class="project">
      <div class="line"></div>
        <Link to="/project1">
          <h2>Wildwatch</h2>
        </Link>
      </div>
      <div class="project">
      <div class="line"></div>
        <Link to="/project2">
          <h2>Airfield Lights</h2>
        </Link>
      </div>
      <div class="project">
      <div class="line"></div>
        <Link to="/project3">
          <h2>Illustrations</h2>
        </Link>
      </div>
    </div>
    <footer>
      <div class="copyright">© Mert Tosun 2020</div>
      <div class="social">
        <a href="https://twitter.com/tosunmert">
          <img src={twitter} class="smi" />
        </a>
        <a href="https://www.instagram.com/mert.tosun.id/">
          <img src={instagram} class="smi" />
        </a>
        <a href="https://www.linkedin.com/in/mert-tosun/">
          <img src={linkedin} class="smi" />
        </a>
      </div>
    </footer>
  </div>
)
