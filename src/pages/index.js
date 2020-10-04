import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Scene from "../components/scene"

export default () => <Scene />
/*
export default () => (
  <div class="main-main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Mert Tosun</title>
    </Helmet>
    <div class="main-header">
      <h1>Hi, I’m Mert!</h1>
      <p class="main-header-info">
        I design things that range between physical products to video games. I’m a PhD researcher at METU and a
        lecturer at TOBB ETU. In my remaining time I cook stuffed peppers, play some RTS or go out for cycling.
        <br></br>
        <br></br>
        Take a look at a selection of my projects or learn more{" "}
        <Link class="link-main" to="/about">
          about me.
        </Link>
      </p>
    </div>
    <div class="main-projects">
      <div class="project">
        <div class="line line1">#GAME DESIGN</div>
        <Link to="/project1">
          <h2>Wildwatch</h2>
        </Link>
      </div>
      <div class="project">
      <div class="line line2">#PRODUCT DESIGN</div>
        <Link to="/project2">
          <h2>Airfield Lights</h2>
        </Link>
      </div>
      <div class="project">
      <div class="line line3">#DESIGN SKETCHING</div>
        <Link to="/project3">
          <h2>Illustrations</h2>
        </Link>
      </div>
      <div class="bg"></div>
    </div>
    <footer>
      <div class="social">
        <a class="social-text" href="https://twitter.com/tosunmert">
          Twitter
        </a>
        <a class="social-text" href="https://www.instagram.com/mert.tosun.id/">
          Instagram
        </a>
        <a class="social-text" href="https://www.linkedin.com/in/mert-tosun/">
          LinkedIn
        </a>
      </div>
      <div class="copyright">© Mert Tosun 2020</div>
    </footer>
  </div>
  
)
*/
