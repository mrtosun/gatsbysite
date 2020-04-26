import React from "react"
import { Link } from "gatsby"
import sketch1 from "../images/sketch1.png"
import sketch2 from "../images/sketch2.png"
import sketch3 from "../images/sketch3.jpg"
import sketch4 from "../images/sketch4.png"
import sketch5 from "../images/sketch5.jpg"
import sketch6 from "../images/sketch6.jpg"
import sketch7 from "../images/sketch7.png"

export default () => (
  <div class="main">
    <div class="main-left">
      <div class="left-header">
        <h1>Illustrations</h1>
        <p class="hashtag">#design sketching</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Previous</li>
          <li>Next</li>
        </ul>
      </nav>
    </div>

    <div class="right-scrollable">
      <figure>
        <img src={sketch1} alt="sketch1" class="project-image" />
      </figure>
      <figure>
        <img src={sketch2} alt="sketch2" class="project-image" />
      </figure>
      <figure>
        <img src={sketch3} alt="sketch3" class="project-image" />
      </figure>
      <figure>
        <img src={sketch4} alt="sketch4" class="project-image" />
      </figure>
      <figure>
        <img src={sketch5} alt="sketch5" class="project-image" />
      </figure>
      <figure>
        <img src={sketch6} alt="sketch6" class="project-image" />
      </figure>
      <figure>
        <img src={sketch7} alt="sketch7" class="project-image" />
      </figure>
    </div>
  </div>
)
