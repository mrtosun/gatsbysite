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
            <Link to="/index"><img src={twitter}  class="smi"/></Link>
            <Link to="/index"><img src={instagram}  class="smi"/></Link>
            <Link to="/index"><img src={linkedin}  class="smi"/></Link>
            </div>
          </div>

        </div>
        <div class="right">
          <div class="project">
            <Link to="/project1">              
                <h2>Wildwatch</h2>      
              
            </Link>
          </div>
          <div class="project">
            <Link to="/proje1">
              
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

