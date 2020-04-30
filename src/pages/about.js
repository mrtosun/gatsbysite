import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import profile from "../images/profile.png"

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
          <img src={profile} alt="profile picture" id="about-photo-image" />
          <Link to="/">Home</Link>
        </div>

        <div class="about-content-info">
          <p>
            Since the civil war in Syria began in 2011, many refugees have come
            to Turkey in order to survive and nd a better place or stay for a
            limited time beforeleaving to other countries. All refugees who stay
            in Turkey have to go through a registration process which is their
            first interaction with Turkish official services. Due to the large
            numbers of refugees entering the country in a short timespan, the
            registration centers had to be arranged very quickly and other
            temporary solutions.
          </p>

          <ul class="about-list">
            <li>
              <b>Courses I teach</b>
            </li>
            <li>3rd year Design Studio (2016 - )</li>
            <li>EUT 215 Introduction to Computer Aided Design (2016 - )</li>
            <li>Computer Aided Design I (2016 - )</li>
            <li>Computer Aided Design II (2016 - )</li>
            <li>CComputer Aided Design III (2018 - )</li>
            <li>Portfolio Presentation (2016 - 2019)</li>
            <li>Design Methods (2016 - 2017)</li>
            <li>4th year design studio (2016 - 2017)</li>
            <li>Interior Visualization (2012-2014)</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)
