import React from "react";

const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">March-August 2022</span>
              <h6>Full-Stack Software Engineering</h6>
              <p>App Academy</p>
            </li>

            <li>
              <span className="dark-bg">Fall 2016-Fall 2021</span>
              <h6>Concept Design/Pre-Production</h6>
              <p>California State University Long Beach</p>
            </li>

            {/* <li>
              <span className="dark-bg">2010-2012</span>
              <h6>Visual Designer</h6>
              <p>Jakarta Design Institute</p>
            </li> */}
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <div>
                <span className="theme-bg">June-August 2019;</span>
              </div>
              <div>
                <span className="theme-bg">January-July 2020;</span>
              </div>
              <div>
                <span className="theme-bg">May-August 2021</span>
              </div>
              <h6>Intern Engineer</h6>
              <p>Charles Pankow Builders</p>
            </li>

            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Computer Lab Technician</h6>
              <p>City of Hawaiian Gardens</p>
            </li>
{/*
            <li>
              <span className="theme-bg">2010-2012</span>
              <h6>Rubby Developer</h6>
              <p>Randara Institute Academy</p>
            </li> */}
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>Javascript</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 96 + "%" }}
                >
                  <span>96%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Python</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 96 + "%" }}
                >
                  <span>96%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>React</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Redux</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 85 + "%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Express</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 90 + "%" }}
                >
                  <span>90%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Flask</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 85 + "%" }}
                >
                  <span>85%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>PostgrSQL</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 82 + "%" }}
                >
                  <span>82%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>SQLAlchemy</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 82 + "%" }}
                >
                  <span>82%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Adobe Creative Suite</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
