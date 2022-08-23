import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import portfolioImg1 from "../../img/portfolio/1.jpg"
import portfolioImg2 from "../../img/portfolio/2.jpg"
import portfolioImg3 from "../../img/portfolio/3.jpg"
import portfolioImg4 from "../../img/portfolio/4.jpg"

const tabList = ["Software Dev.", "Design"];
const AllPortfolioContent = [
  {
    img: "1",
    title: "Sonambulo",
    subTitle: "Full Stack Web App",
    alterText: "tumblr clone",
    delayAnimation: "",
    portfolioLink:
      "https://sonambulo.herokuapp.com/",
  },
  {
    img: "2",
    title: "Eventzeit",
    subTitle: "Front-End Web App",
    alterText: "eventbrite clone",
    delayAnimation: "100",
    portfolioLink:
      "https://eventzeit.herokuapp.com/",
  },
  {
    img: "3",
    title: "Filmb0",
    subTitle: "Back-End Web App",
    alterText: "flickr clone",
    delayAnimation: "200",
    portfolioLink:
      "http://filmb0.herokuapp.com/",
  },
  // {
  //   img: "4",
  //   title: "Business Card",
  //   subTitle: "Graphicriver Market",
  //   alterText: "E-Cosmetics",
  //   delayAnimation: "0",
  //   portfolioLink:
  //     "https://dribbble.com/shots/16545341-Imroz-Vue-JS-Creative-Agency-Portfolio-Template",
  // },
  // {
  //   img: "7",
  //   title: "Code Editing",
  //   subTitle: "Codecanyon Market",
  //   alterText: "Bottle Illustration",
  //   delayAnimation: "100",
  //   portfolioLink:
  //     "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  // },
  // {
  //   img: "6",
  //   title: "Web Application",
  //   subTitle: "Behance Shot",
  //   alterText: "Web Application",
  //   delayAnimation: "200",
  //   portfolioLink:
  //     "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  // },
];
// const BrandingPortfolioContent = [
//   {
//     img: "1",
//     title: "Sonambulo",
//     subTitle: "Full Stack Web App",
//     alterText: "tumblr clone",
//     delayAnimation: "",
//     portfolioLink:
//       "https://sonambulo.herokuapp.com/",
//   },
//   {
//     img: "2",
//     title: "Eventzeit",
//     subTitle: "Front-End Web App",
//     alterText: "eventbrite clone",
//     delayAnimation: "100",
//     portfolioLink:
//       "https://eventzeit.herokuapp.com/",
//   },
//   {
//     img: "3",
//     title: "Filmb0",
//     subTitle: "Back-End Web App",
//     alterText: "flickr clone",
//     delayAnimation: "200",
//     portfolioLink:
//       "http://filmb0.herokuapp.com/",
//   },
// ];

const PhotographyPortfolioContent = [
  {
    img: "4",
    title: "Design Work",
    subTitle: "My Concept Design/illustration Portfolio",
    alterText: "Design Portfolio",
    delayAnimation: "0",
    portfolioLink:
      "https://bojiistudios.com/",
  },
];


const PortfolioAnimation = () => {
  return (
    <SimpleReactLightbox>
      <div id="work" className="positon-relative">
        <div className="portfolio-filter-01">
          <Tabs>
            <TabList className="filter d-flex justify-content-center">
              {tabList.map((val, i) => (
                <Tab key={i}>{val}</Tab>
              ))}
            </TabList>
            {/* End tablist */}

            <SRLWrapper>
              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {AllPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          {val.img == 1 &&
                            <a
                              href={portfolioImg1}
                              className="gallery-link"
                            >
                              <img
                                src={portfolioImg1}
                                alt={val.alterText}
                              />
                            </a>
                          }
                          {val.img == 2 &&
                            <a
                              href={portfolioImg2}
                              className="gallery-link"
                            >
                              <img
                                src={portfolioImg2}
                                alt={val.alterText}
                              />
                            </a>
                          }
                          {val.img == 3 &&
                            <a
                              href={portfolioImg3}
                              className="gallery-link"
                            >
                              <img
                                src={portfolioImg3}
                                alt={val.alterText}
                              />
                            </a>
                          }
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>

              {/* <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {BrandingPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          <a
                            href={`img/portfolio/${val.img}.jpg`}
                            className="gallery-link"
                          >
                            <img
                              src={`img/portfolio/${val.img}.jpg`}
                              alt={val.alterText}
                            />
                          </a>
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel> */}

              <TabPanel>
                <div className="portfolio-content row lightbox-gallery">
                  {PhotographyPortfolioContent.map((val, i) => (
                    <div
                      className="col-sm-6 col-lg-4 grid-item product"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-box-01">
                        <div className="portfolio-img">
                          <div className="portfolio-info">
                            <h5>
                              <a href={val.portfolioLink} target="_blank">
                                {val.title}
                              </a>
                            </h5>
                            <span>{val.subTitle}</span>
                          </div>
                          {/* End .portfolio-info */}
                          {val.img == 4 &&
                            <a
                              href={portfolioImg4}
                              className="gallery-link"
                            >
                              <img
                                src={portfolioImg4}
                                alt={val.alterText}
                              />
                            </a>
                          }
                          {/* End gallery link */}
                          <a
                            href={val.portfolioLink}
                            className="portfolio-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span className="ti-link"></span>
                          </a>
                          {/* End .portfolio-icon */}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* End list wrapper */}
              </TabPanel>
            </SRLWrapper>
            {/* End tabpanel */}
          </Tabs>
        </div>
      </div>
    </SimpleReactLightbox>
  );
};

export default PortfolioAnimation;
