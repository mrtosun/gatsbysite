import React from "react"
import {Link} from "gatsby"
import twitter from "../images/twitter.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"

export default () => 

<div class="main">
        <div class="main-left">
          <div class="main-left-header">
            <h1>I'm Mert!</h1>
            <p class="main-left-header-info">
              Designer experimenting between physical, digital and social. I
              design products, teach and build games. Take a look at a selection
              of my projects or learn more 
              <Link to="/index">
                about me.
              </Link>
            </p>                
              
            <div class="main-left-socialmedia">
            <a href="https://twitter.com/tosunmert"><img src={twitter}  class="smi"/></a>
            <a href="https://www.instagram.com/mert.tosun.id/"><img src={instagram}  class="smi"/></a>
            <a href="https://www.linkedin.com/in/mert-tosun/"><img src={linkedin}  class="smi"/></a>
            </div>
          </div>

        </div>
        <div class="main-right">
          <div class="project">
            <Link to="/project1">              
                <h2>Wildwatch</h2>      
              
            </Link>
          </div>
          <div class="project">
            <Link to="/project2">
              
                <h2>Airfield Lights</h2>
              
            </Link>
          </div>
          <div class="project">
            <Link to="/proje1">
              
                <h2>Ilustrations</h2>
              
            </Link>
          </div>
          <div class="project">
            <Link to="/proje1">
              
                <h2>Arboresthesia</h2>
              
            </Link>
          </div>
          <div class="project">
            <Link to="/proje1">
            
                <h2>Refugee Reg</h2>
              
            </Link>
          </div>
        </div>
      </div>

