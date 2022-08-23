import React from "react";
import aboutPhoto from "../../img/about/about-2.jpg"

const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="img-box dark-img-box">
            <img src={aboutPhoto} alt="Photo of Elias" />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-dealay="100"
        >
          <div className="typo-box about-me">
            <h3>Elias</h3>
            <h5>
              A <span className="color-theme">Full-Stack Software Engineer</span> based in{" "}
              <span className="color-theme">Los Angeles</span>
            </h5>
            <p>
              <div style={{marginBottom: '24px'}}>My past work experiences in Engineering and training in both <span className="color-theme">Software Development</span> and <span className="color-theme">Design</span>, have led me on the path to becoming an asset to any Software Development Team.</div>
              <div>My past experiences stem from using what I've learned from my education at <span className="color-theme">CSULB</span>, <span className="color-theme">Art Center</span>, and mentorships with industry professionals, to help design and engineer buildings at a construction engineering company for a variety of clients. This includes private clients such as <span className="color-theme">Cedars Sinai</span>, large commercial clients like the <span className="color-theme">NFL</span>, and public clients such as <span className="color-theme">LA Union Station</span>, <span className="color-theme">LA Mission College</span>, and <span className="color-theme">LA Valley College</span>.</div>
              <div>These experiences in design with high-profile clients, while also learning and implementing the engineering side of the field has provided me the ideal skillset to confidently traverse the software development/engineering industry. My eye for aesthetics and knack for intuitive design play perfectly into software development and now that I’ve acquired the skills necessary for Full-Stack development I am ready to be an asset to a company who is looking to create solid software/applications, and pride themselves in good design.</div>
            </p>
             <div className="row about-list">
              {/*<div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>4th april 1991</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>22 Yr</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Canada</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>California, USA</p>
                </div>
              </div> */}
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>bo.coding888@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>562-454-6507</p>
                </div>
                {/* <div className="media">
                  <label>Skype</label>
                  <p>skype.0404</p>
                </div> */}
                {/* <div className="media">
                  <label>Freelance</label>
                  <p>Available</p>
                </div> */}
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/elias-rodriguez-resume.pdf" download>
                Download CV
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
