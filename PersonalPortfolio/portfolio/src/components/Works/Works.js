import React from "react"

import "./works.css"
import Profile1 from "../../assets/Profile1.jpg"
import Profile2 from "../../assets/Profile2.jpg"
import Profile3 from "../../assets/Profile3.jpg"

function Works() {
  return (
    <section id="works">
      <h2 className="worksTitle">Education Background</h2>
      <div className="worksDesc">
        <h3>Moradabad Institute of Technology</h3>
        <h4>Bachelor of Technology</h4>
        <p>
          Completed in 2022
          <br />
          Affiliated to AKTU Board <br />
          Secured 82.4% in BTech
        </p>
      </div>

      <div className="worksDesc">
        <h3>B.V.M. Sr. Sec. School</h3>
        <p>
          Affiliated to CBSE board
          <br />
          Secured 10 CGPA in class 10th
          <br />
          Graduated class 12th with 70%
        </p>
      </div>
      {/* <span className="worksDesc">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy.{" "}
      </span> */}
      {/* <div className="worksImgs">
        <img src={Profile1} alt="Profile" className="worksImg" />
        <img src={Profile2} alt="Profile" className="worksImg" />
        <img src={Profile3} alt="Profile" className="worksImg" />
        <img src={Profile1} alt="Profile" className="worksImg" />
        <img src={Profile2} alt="Profile" className="worksImg" />
        <img src={Profile3} alt="Profile" className="worksImg" />
      </div>

      <button className="workBtn">See More</button> */}
    </section>
  )
}

export default Works
