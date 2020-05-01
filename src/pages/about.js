import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import profile from "../images/profile.jpg"

export default () => (
  <div class="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>About me</title>
    </Helmet>
    <div class="about">
      <div class="about-head">About Me</div>

      <div class="about-content">
        <div class="about-content-photo">
          <img src={profile} alt="Mert Tosun" id="about-photo-image" />
        </div>

        <div class="about-content-info">
          <p>
            I'm a designer and researcher living in Ankara. I provide design
            consultancies to tech start-ups and work on my Phd Research on
            transformational games at METU. Meanwhile, I pass on my knowledge at
            TOBB ETU.
            <br />
            <br />I sketch and illustrate, using digital technologies %90 of the
            time. I like rainy days, coffee, thriller movies and guitar
            improvisations.
          </p>
          <ul class="about-list">
            <li>
              <b>Courses I teach</b>
            </li>
            <li>3rd year Design Studio (2016 - )</li>
            <li>EUT 215 Introduction to Computer Aided Design (2016 - )</li>
            <li>Computer Aided Design I (2016 - )</li>
            <li>Computer Aided Design II (2016 - )</li>
            <li>Computer Aided Design III (2018 - )</li>
            <li>Portfolio Presentation (2016 - 2019)</li>
            <li>Design Methods (2016 - 2017)</li>
            <li>4th year design studio (2016 - 2017)</li>
            <li>Interior Visualization (2012-2014)</li>
          </ul>
          <Link class="about-nav" to="/">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  </div>
)
