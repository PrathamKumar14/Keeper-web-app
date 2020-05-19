import React, { useState } from "react";

function Footer() {
  const [isMouseOver, setMouseOver] = useState(false);
  const [githubIcon, setGithubIcon] = useState(false);
  const [twitterIcon, setTwitterIcon] = useState(false);
  const [linkedinIcon, setLinkedinIcon] = useState(false);
  const [facebookIcon, setFacebookIcon] = useState(false);
  const [instagramIcon, setInstagramIcon] = useState(false);

  return (
    <div className="container">
      <footer>
        <button
          onMouseOver={() => setMouseOver(!isMouseOver)}
          // onMouseOut={() => setMouseOver(!isMouseOver)}
          style={{
            backgroundColor: isMouseOver ? "rgb(216, 243, 241)" : "",
            letterSpacing: isMouseOver ? "5px" : "normal",
            opacity: isMouseOver ? "0" : "1"
          }}
          className="follow-me-btn"
          type="submit"
        >
          FOLLOW ME
        </button>{" "}
        <br />
        <a href="https://github.com/PrathamKumar14">
          <img
            src="https://img.icons8.com/material-outlined/64/000000/github.png"
            alt=""
            onMouseOver={() => setGithubIcon(true)}
            onMouseOut={() => setGithubIcon(false)}
            style={{
              opacity: isMouseOver ? "1" : "0",
              height: githubIcon ? "80px" : ""
            }}
            class="fa-footer"
          />
        </a>
        <a href="https://twitter.com/pratham85086605">
          <img
            src="https://img.icons8.com/cotton/64/000000/twitter.png"
            alt=""
            onMouseOver={() => setTwitterIcon(true)}
            onMouseOut={() => setTwitterIcon(false)}
            style={{
              opacity: isMouseOver ? "1" : "0",
              height: twitterIcon ? "80px" : ""
            }}
            class=" fa-footer"
          />
        </a>
        <a href="https://www.instagram.com/rnezhmet_dinov/">
          <img
            src="https://img.icons8.com/nolan/64/instagram-new.png"
            alt=""
            onMouseOver={() => setInstagramIcon(true)}
            onMouseOut={() => setInstagramIcon(false)}
            style={{
              opacity: isMouseOver ? "1" : "0",
              height: instagramIcon ? "80px" : ""
            }}
            class="fa-footer"
          />
        </a>
        <a href="https://www.linkedin.com/in/pratham-kumar-abb051175/">
          <img
            src="https://image.flaticon.com/icons/svg/174/174857.svg"
            alt=""
            onMouseOver={() => setLinkedinIcon(true)}
            onMouseOut={() => setLinkedinIcon(false)}
            style={{
              opacity: isMouseOver ? "1" : "0",
              height: linkedinIcon ? "63px" : ""
            }}
            class="fa-footer linkedin"
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100008740838226">
          <img
            src="https://img.icons8.com/color/64/000000/facebook-new.png"
            alt=""
            onMouseOver={() => setFacebookIcon(true)}
            onMouseOut={() => setFacebookIcon(false)}
            style={{
              opacity: isMouseOver ? "1" : "0",
              height: facebookIcon ? "80px" : ""
            }}
            class="fa-footer"
          />
        </a>
      </footer>
    </div>
  );
}

export default Footer;
