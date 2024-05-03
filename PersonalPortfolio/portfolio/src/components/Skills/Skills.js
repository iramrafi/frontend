import React from "react"
import "./skills.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesign from "../../assets/web-design.png"
import AppDesign from "../../assets/app-design.jpg"

function Skills() {
  return (
    <section id="skills">
      <span className="skillTitle">Professional Experience</span>
      <span className="skillDesc">
        Highly motivated and results-driven Software Engineer with nearly two
        years of experience in software development. Proficient in frontend
        development using the React library. Eager to leverage React expertise
        to contribute to the growth and success of the organization.
      </span>

      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Infosys | Digital Specialist Engineer</h2>
            <h4>2022 – Present</h4>
            <p>Key responsibilities:</p>
            <ul>
              <li>
                Currently engaged in a development project. My responsibilities
                encompass a diverse range of tasks, including system analysis,
                design, development, and deployment.
              </li>
              <li>
                I ensure seamless integration of digital solutions into the
                project workflow.
              </li>
            </ul>
          </div>
        </div>

        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Nagarro| Software Developer Trainee</h2>
            <h4>Mar 2022 - May 2022</h4>
            <p>Key responsibilities:</p>
            <ul>
              <li>
                Participated in comprehensive training programs focused on
                various technologies and tools.
              </li>
              <li>
                Engaged in hands-on learning experiences, gaining practical
                skills in Dotnet. Demonstrated a strong commitment to learning
                and professional growth
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>Demo text here you can change it later</p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>Demo Text which you can change as per your convenience</p>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Skills
