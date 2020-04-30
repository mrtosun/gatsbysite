import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import banner from "../images/wildwatch_banner.png"
import states from "../images/ww-threestates.png"
import idle from "../images/Idle.gif"
import birds from "../images/birds.png"
import assets from "../images/assets.png"
import scenario from "../images/ww_scenario.gif"

export default () => (
  <div class="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Wildwatch</title>
    </Helmet>
    <div class="main-left">
      <div class="left-header">
        <h1>Wildwatch</h1>
        <p class="hashtag">#game development</p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/project3">←Previous</Link>
          </li>
          <li>
            <Link to="/project2">Next→</Link>
          </li>
        </ul>
      </nav>
    </div>

    <div class="right-scrollable">
      <figure>
        <img src={banner} alt="wildwatch banner" class="project-image" />
      </figure>
      <h3>The Game</h3>
      <p>
        Wildwatch revolves around the theme of birdwatching. It’s about creating
        a calm and relaxing experience without giving up on the challange and
        fun. It’s a game in which you encounter real animal species and
        appreciate the nature. In this game you complete objectives while
        leaving everything as you find it.
      </p>
      <figure>
        <div class="gif-png">
          <img src={idle} alt="idle character" id="idle-gif" />
          <img src={states} alt="character states" id="states" />
        </div>
        <figcaption>Here is an enthusiastic bird watcher on duty!</figcaption>
      </figure>
      <p>
        The main character of the game is a novice bird watcher. The main
        objective is to take pictures of specific kind of birds indictated in
        mission objectives. However it is not an easy task. Birds are quite
        aware of their surroundings and they fly away if they spot you. So, you
        must move in stealth and manage to get close enough to take a picture.
      </p>
      <figure>
        <img
          src={birds}
          alt="birds"
          style={{ width: "85%", paddingBottom: "20px" }}
        />
        <figcaption>Different birds, different personalities.</figcaption>
      </figure>
      <p>
        Not all the birds are the same, some of them are common and some of them
        are rare. Some are easy to spot and some of them are hard. They have
        different sight distance and radius. I’ve choosen some local bird
        species with varying properties by from the{" "}
        <Link to="#">Birds of METU guide book</Link>.
      </p>
      <h3>Game Mechanics</h3>
      <p>
        The main game mechanic is based on stealth and heavily inspired by games
        like Commandos and Shadow Tactics. Each bird has two vision cones
        representing their binocular vision. These cones rotate as birds turn
        their heads. Objects like trees and large rocks block their vision. It’s
        players job to move without getting noticed and get close enough to a
        bird to capture a photo. Timing and positioning is key for a good shot.
      </p>
      <figure>
        <img
          src={scenario}
          alt="scenario"
          style={{ width: "85%", paddingBottom: "20px" }}
        />
        <figcaption>
          How to take a great bird photo or fail miserably.
        </figcaption>
      </figure>
      <h3>Assets</h3>
      <p>
        I hand drew all the assets to populate the environment. It was quite fun
        to experiment with various brushes, textures and colors. My aim was to
        create a warm atmosphere while adopting a illustration style rather than
        realism. This style allows quick production and allows for more
        expressiveness.
      </p>
      <img
        src={assets}
        alt="assets"
        style={{ width: "90%", paddingBottom: "20px" }}
      />
      <figcaption>Hand drawn assets.</figcaption>
      <h3>Demo</h3>
      <p>
        An early development version of Wildwatch was presented at the
        Gateway’19 in METU MMI. The game was in a playable state despite some
        occasional bugs. It was a great experience to recieve all the positive
        and constructive critism from fellow game developers. You can find the
        gameplay video down below.
      </p>
      <iframe
        class="youtube"
        width="672"
        height="378"
        title="wildwatch"
        src="https://www.youtube.com/embed/Ety0naqkcrM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p>
        I continue to work on Wildwatch whenever I find time to spare. Who
        knows, maybe one day you might want to get it during a Steam sale. :)
      </p>
    </div>
  </div>
)
