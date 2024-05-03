import React from "react"
import "./intro.css"
import bg from "../../assets/ProfilePic.png"
import btnImg from "../../assets/hireMe.png"
import { Link } from "react-scroll"

function Intro() {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Iram</span>
          <br />
          Software Engineer
        </span>
        <p className="introPara">
          Hello! I'm a passionate web designer, eager to bring creative <br />
          solutions to digital spaces.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro
