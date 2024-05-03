import react, { useRef } from "react"
import emailjs from "@emailjs/browser"
import "./contact.css"
import LinkedInProfile from "../../assets/linkedin.png"
import Profile1 from "../../assets/Profile1.jpg"
import Profile2 from "../../assets/Profile2.jpg"
import Profile3 from "../../assets/Profile3.jpg"
import Github from "../../assets/github.png"

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_ixu2o5q",
        "template_xuthjwq",
        form.current,
        "GV6Nr-KU1zrktgmWu"
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
          alert("Email sent!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">Projects</h1>
        <p className="clientDesc">
          <h3>Task Manager</h3>
          <ul>
            <li>Developed a fronted Task Manager application</li>
            <li>
              Designed and implemented frontend UI/UX using React.js, HTML, and
              CSS.
            </li>
          </ul>
        </p>

        <p className="clientDesc">
          <h3>Portfolio</h3>
          <ul>
            <li>Developed a fronted Personal Portfolio application</li>
            <li>
              Designed and implemented frontend Responsive UI/UX using React.js
              library and explored Router Functionality.
            </li>
          </ul>
        </p>
        {/* <p className="clientDesc">
          My name is Iram Rafi and I am 23 year old. I want to become nothing
          but I don't know how I have become Software Engineer
        </p>
        <div className="clientImgs">
          <img src={Profile1} alt="Client" className="clientImg" />
          <img src={Profile2} alt="Client" className="clientImg" />
          <img src={Profile3} alt="Client" className="clientImg" />
          <img src={Profile1} alt="Client" className="clientImg" />
        </div> */}
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities.
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your message"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/iram-rafi-668894216/"
              target="_blank"
            >
              <img
                src={LinkedInProfile}
                alt="LinkedIn Profile"
                className="link"
              />
            </a>

            <a href="https://github.com/iramrafi" target="_blank">
              <img src={Github} alt="Github Profile" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
