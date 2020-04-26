import React from "react"
import { Helmet } from "react-helmet" 
import { Link } from "gatsby"
import banner from "../images/air_render1.jpg"
import sketch from "../images/air_sketch.png"
import module from "../images/air_module.png"
import technic from "../images/air_technic.png"
import prototype from "../images/air_prototype.png"
import prototype2 from "../images/air_prototype2.png"
import render2 from "../images/air_render2.jpg"
import render3 from "../images/air_render3.jpg"

export default () => (
  <div class="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Airfield Lights</title>
    </Helmet>
    <div class="main-left">
      <div class="left-header">
        <h1>Airfield Lights</h1>
        <p class="hashtag">#product design</p>
        <p class="hashtag">#prototyping</p>
      </div>
      <nav>
        <ul>
        <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project1">Previous</Link>
          </li>
          <li>
            <Link to="/project3">Next</Link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right-scrollable">
      <figure>
        <img src={banner} alt="inset lights" class="project-image" />
      </figure>
      <h3>Inset Lights</h3>
      <p>
        When you think about an airfield, especially the runway, you will
        probably think of an array of lights embedded on the surface of the
        runway. These inset lights guide pilots during takeoff and landing.
      </p>
      <p>
        UBS was a company that was already operating in the aviation industry.
        They were planning to produce their own airfield lights and needed a
        design that would differentiate their brand in the international market.
        As an industrial designer at TOBB ETU MEDEC, I’ve undertaken all off the
        product design stages from concept development to prototyping under the
        supervision of Dr. Aydın Öztoprak. I believe that this project showcases
        the full span of my product development skills.
      </p>

      <figure>
        <img src={sketch} alt="initial sketches" />
        <figcaption>Initial form explorations</figcaption>
      </figure>
      <h3>Modular Design</h3>
      <p>
        Our main goal was to establish a distinguished form language while
        following the FAA regulations and usability requirements. In cooperation
        with the client, a modular design was decided upon. In a modular design,
        different light types to could be integrated in different sized fittings
        allowing a more flexible production and lower maintainance times.
      </p>

      <figure>
        <img
          src={module}
          alt="modules"
          style={{ width: "85%", paddingBottom: "20px" }}
        />
      </figure>
      <figure>
        <img
          src={technic}
          alt="CAD Models"
          style={{ width: "85%", paddingBottom: "20px" }}
        />
        <figcaption>Prepared the CAD models for production</figcaption>
      </figure>
      <h3>Prototyping</h3>
      <p>
        One exciting part of this project was that I handled the prototyping on
        my own. I’ve prepared the CAM files and the NC code. It was my first
        experience with controlling a CNC router. The main body is machined out
        of delrin in CNC and the light module was made with a 3D printer.
      </p>
      <figure>
        <img src={prototype} alt="Prototype" />
        <figcaption>Prepared the CAD models for production</figcaption>
      </figure>

      <h3>Final Renders and Prototypes</h3>
      <p>
        Designs were rendered in Keyshot to communicate the final look. Later on
        the client produced the final prototypes using in-house facilities.
      </p>
      <figure>
        <img src={render2} alt="Rendered view 1" />
        <figcaption>Render of the inset light.</figcaption>
      </figure>

      <figure>
        <img src={render3} alt="Rendered view of the taxiway module" />
        <figcaption>Render of the taxiway module.</figcaption>
      </figure>

      <figure>
        <img
          src={prototype2}
          alt="Final prototypes were manufactured by the client"
        />
        <figcaption>
          Final prototypes were manufactured by the client
        </figcaption>
      </figure>
    </div>
  </div>
)
