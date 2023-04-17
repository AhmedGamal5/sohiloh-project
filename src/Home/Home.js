import React, {useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ImArrowRight2 } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import emailjs from "@emailjs/browser";
import { AnimationOnScroll } from "react-animation-on-scroll";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { HashLink } from 'react-router-hash-link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {  
  const form = useRef(); 
  const sendEmail = (e) => {
    alert("message sent successfully");
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qpnlje9",
        "template_kap4crb",
        form.current,
        "tyOdNefyWgaEYKr6Y"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      {/* start First section */}
      <section className="Fsec">
        <Container fluid>
          <Row>
            <Col lg={7} md={7} sm={12}>
              <h1>
                Turn your website into a <br />
                <span>user-acquisition engine.</span>
              </h1>
              <h2>
                We build marketing websites that help you sell on autopilot.
              </h2>
              <br />
              <Link to="/" className="link">
                Let's talk <ImArrowRight2 />
              </Link>
            </Col>
            <Col lg={5} md={5} sm={12}>
              <img
                className="img-fluid"
                alt="Sample"
                src="images/642b3aacf3ce6447b468562c_hero-computer-p-800.webp"
              />
              <img
                className="img1-fluid"
                alt=""
                src="images/642b3a9aee459b6e133379ae_hotjar.webp"
              />
              <img
                className="img2-fluid"
                alt=""
                src="images/642b3a925962206ce85a67b4_webflow.webp"
              />
              <img
                className="img3-fluid"
                alt=""
                src="images/642b3aa2e5ad5e1208851d00_optimize.webp"
              />
              <img
                className="img4-fluid"
                alt=""
                src="images/642b3aa819f5a1edfa113b77_figma.webp"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* End First section */}

      {/* start Second section */}
      <section className="Secsec">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h5>PICTURE THIS</h5>
              <h1>
                Imagine having your sales team on the job 24/7, interacting{" "}
                <br />
                with an endless stream of ready-to-buy visitors.
              </h1>
              <h2>
                That's precisely what we will build
                <span> for your business</span>.
              </h2>
              <br />
              <Link to="/" className="link">
                Let's talk <ImArrowRight2 />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Second section */}

      {/* start Third section */}
      <section className="Thirdsec" id="Latest Builds">
        <div
          className="sectext wow fadeIn"
          data-wow-duration="2s"
          data-wow-delay="0.1s"
        >
          <h3>Latest builds.</h3>
          <Link to="/Projects">
            View Projects <ImArrowRight2 />
          </Link>
        </div>
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          navigation={true}
          breakpoints={{
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 50,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="images/slider/62bdee66d787c4a6f4d9ced7_4WhistlesWinery-ShilohCreative-p-1080.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/629a744633cf80efdf426182_NewSongChurch-ShilohCreative-p-1080.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/623391a13c260eca5a41c7cc_BelloBeauty-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/623391b6028cc04e169667de_CodeSee-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/623391de29ea67625d90bc28_CodeSeeLearn-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/6233964d458d840baa74c42f_LandingPage-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/6233919229ea6779ed90baf2_VanguardDesignCo-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/6233990417440f78c3061103_LandingPage-ShilohCreative (1).jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/62bdee66d787c4a6f4d9ced7_4WhistlesWinery-ShilohCreative-p-1080.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/629a744633cf80efdf426182_NewSongChurch-ShilohCreative-p-1080.jpeg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/623391a13c260eca5a41c7cc_BelloBeauty-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="images/slider/623391b6028cc04e169667de_CodeSee-ShilohCreative.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
      {/* End Third section */}

      {/* start Fourth section */}
      <section className="Fourthsec">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h5>SPOKEN TRUTH</h5>
              <h1>
                An <span> 11-star partnership </span> with Shiloh Creative.
              </h1>
              <h2>
                “If I could select 11 stars in my review of the team at Shiloh
                Creative, I would. Their approach to collaboration has allowed
                my team to move quickly when needed—a meaningful benefit for a
                fast-paced startup. If you're seeking a true creative partner in
                web design and development, consider an eleven-star partnership
                with Shiloh Creative.”
              </h2>
              <p className="P">
                <img className="img4-fluid" alt="" src="images/face.PNG" />
                <p>
                  Ahmed Gamal
                  <br />
                  <span> Software Engineer</span>
                </p>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Fourth section */}

      {/* start Fifth section */}
      <section className="fifthsec">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <div
                className="sectext wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.1s"
              >
                <h3>How it's done.</h3>
              </div>
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <p className="P1 ">
                  <img
                    className="img4-fluid"
                    alt=""
                    src="images/642b3aa819f5a1edfa113b77_figma.webp"
                  />
                  <p>
                    UX/UI Design
                    <span>
                      {" "}
                      Where concepts turn into a strategic user-experience.
                    </span>
                  </p>
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInRightBig">
                <p className="P2 ">
                  <img
                    className="img4-fluid"
                    alt=""
                    src="images/642b3a925962206ce85a67b4_webflow.webp"
                  />
                  <p>
                    Webflow Development
                    <span> Where design turns into code.</span>
                  </p>
                </p>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                <p className="P1">
                  <img
                    className="img4-fluid"
                    alt=""
                    src="images/642b3a9aee459b6e133379ae_hotjar.webp"
                  />
                  <p className="pp1">
                    Behavior Analysis
                    <span> Where user data is contextualized.</span>
                  </p>
                </p>
              </AnimationOnScroll>

              <AnimationOnScroll animateIn="animate__fadeInRightBig">
                <p className="P2">
                  <img
                    className="img4-fluid"
                    alt=""
                    src="images/642b3aa2e5ad5e1208851d00_optimize.webp"
                  />
                  <p>
                    Experimentation
                    <span> Where hypotheses are validated.</span>
                  </p>
                </p>
              </AnimationOnScroll>
              <h2>
                Accompany strategic marketing with
                <span> data-driven design</span>.
                <Link to="/" className="link">
                  Let's talk <ImArrowRight2 />
                </Link>
              </h2>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Fifth section */}

      {/* start sixth section */}
      <section className="sixthsec" id="Process">
        <Container fluid>
          <h3>Our Process.</h3>
          <div>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: " #1d1d1f",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  #fff",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title title">
                  Discovery
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Where we will connect over Zoom to understand your product,
                  uncover its value, and outline a system that sells.
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: " #1d1d1f",
                  color: "#fff",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title title">
                  Design
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Where we will work with you to iterate, conceptualize, and
                  mock up a true data-driven customer experience using Figma.
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: " #1d1d1f",
                  color: "#fff",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title title">
                  Development
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Where we will develop your final product using Webflow and
                  introduce you to your new marketing co-pilot - your website.
                </h4>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: " #1d1d1f",
                  color: "#fff",
                }}
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              >
                <h3 className="vertical-timeline-element-title title">
                  Delivery
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Where you sit back and watch the sales engine go to work -
                  converting traffic like magic. We make sure your KPI is
                  customer acquisition, not just a bigger email list.
                </h4>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </Container>
      </section>
      {/* End sixth section */}

      {/* start seven section */}
      <section className="sevensec">
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12}>
              <h5>OUR PROMISE</h5>
              <h1>
                Say goodbye to bi-annual redesigns that cost over $25K, get
                stuck in development queues for 10+ weeks, and only boost
                conversion rates once. Let us introduce you to
              </h1>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End seven section */}

      {/* start Eight section */}
      <section className="Eightsec" id="Services">
        <Container fluid>
          <Row>
            <div
              className="sectext wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.1s"
            >
              <h3>Why Webflow.</h3>
            </div>
            <Col lg={4} md={4} sm={12} className="sec8info">
              <h5>REASON 1</h5>
              <h2>Limitless Storytelling</h2>
              <img
                className=""
                alt="Sample"
                src="images/mobile_development_re_wwsn 1.svg"
              />
              <p>
                Unleash the best visuals and experiences that modern web design
                has to offer. Webflow turns your wildest of ideas into strategic
                sales experiences.
              </p>
            </Col>
            <Col lg={4} md={4} sm={12} className="sec8info">
              <h5>REASON 2</h5>
              <h2>Industry-Leading Performance</h2>
              <img className="" alt="Sample" src="images/screen.svg" />
              <p>
                Hosted on an ultra-fast global CDN, Webflow goes full steam
                ahead with load speed, uptime, asset optimization, and SEO. All
                without ever needing to install a patch or upload a server
                configuration.
              </p>
            </Col>
            <Col lg={4} md={4} sm={12} className="sec8info">
              <h5>REASON 3</h5>
              <h2>Developer-Free Tweaks</h2>
              <img className="" alt="Sample" src="images/8right.svg" />
              <p>
                Webflow’s ‘Editor Mode’ allows any team member to update content
                as they please without wreaking havoc on the code or leaving
                changes stuck in a “work in progress” queue.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End Eight section */}

      {/* start signin section */}
      <section className="signinsec" id="Contact us">
        <MDBContainer fluid>
          <Row>
            <Col lg={6} md={6} sm={12} className="sectext">            
              <h3>Interested in working with us?</h3>
              <h4>Let's make something special.</h4>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <MDBRow className="justify-content-center align-items-center">
                <MDBCard className="mdbCard">
                  <MDBCardBody className="px-4">
                    <form ref={form} onSubmit={sendEmail}>
                      <h3 className="fw-bold mb-md-4">
                        Contact us
                      </h3>
                      <MDBRow>
                        <MDBCol md="6" className="fullname">
                          <MDBInput
                            name="user_name"
                            wrapperClass="mb-4"
                            label="Full name"
                            size="lg"
                            id="form1"
                            type="text"
                          />
                        </MDBCol>

                        <MDBCol md="6" className="fullname">
                          <MDBInput
                            name="Business_name"
                            wrapperClass="mb-4"
                            label="Business name"
                            size="lg"
                            id="form2"
                            type="text"
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="6" className="fullname">
                          <MDBInput
                            name="user_massage"
                            wrapperClass="mb-4"
                            label="Massage"
                            size="lg"
                            id="form3"
                            type="text"
                          />
                        </MDBCol>

                        <MDBCol md="6" className="fullname">
                          <MDBInput
                            name="user_scope"
                            wrapperClass="mb-4"
                            label="What is the scope of your project?"
                            size="lg"
                            id="form2"
                            type="text"
                          />
                        </MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="6" className="fullname">
                          <MDBInput
                            name="user_email"
                            wrapperClass="mb-4"
                            label="Email"
                            size="lg"
                            id="form4"
                            type="email"
                          />
                        </MDBCol>

                        <MDBCol md="6" className="fullname">
                          <MDBInput
                            name="user_phone"
                            wrapperClass="mb-4"
                            label="Phone Number"
                            size="lg"
                            id="form5"
                            type="rel"
                          />
                        </MDBCol>
                      </MDBRow>
                      <button
                        type="submit"
                        className="btnsubmit"
                        value={"send"}
                      >
                        Submit <ImArrowRight2 />
                      </button>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBRow>
            </Col>
          </Row>
        </MDBContainer>
      </section>
      {/* End signin section */}
      
      {/* start footer section */}
      <footer>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col md="4" sm="12">
                        <Link to="/">
                        <img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" alt=""  className="wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.5s"/>
                        </Link>
                    </Col>
                    <Col md="4" sm="12">
                    <div className="wow fadeInDown" data-wow-duration="2s" data-wow-delay="0.5s">
                        <HashLink to="/#Latest Builds">Latest Builds</HashLink>
                        <HashLink to="/#Process">Process</HashLink>
                        <HashLink to="/#Services">Services</HashLink>
                        <HashLink to="/#Contact us">Contact Us</HashLink>                        
                        </div>
                    </Col>
                    <Col md="4" sm="12" className='iconsdiv'>
                    <div className="wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.5s">
                        <Link to="#" target="_blank"><FacebookIcon /></Link>
                        <Link to="#" target="_blank"><InstagramIcon /></Link>
                        <Link to="#" target="_blank"><LinkedInIcon /></Link>
                        </div>
                    </Col>
                </Row>
                <div className="copyright wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                    <p>© 2023 Shiloh Creative LLC</p>
                    <p>Email: info@shilohcreative.com</p>
                </div>
            </Container>
        </footer>
      {/* End footer section */}
    </>
  );
};
export default Home;
