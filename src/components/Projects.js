import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-1.png";
import projImg2 from "../assets/img/project-3.png";
import projImg3 from "../assets/img/project-2.png";
import projImg4 from "../assets/img/project-4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "News App",
      description: "A News App built using ReactJS and News API. The users can search for news articles based on the keywords they enter. The app also has a dark mode feature. The users can sort the news articles based on the date and time they were published.",
      imgUrl: projImg1,
    },
    {
      title: "TextUtils",
      description: "Text Manipulation Tool",
      imgUrl: projImg3,
    },
    {
      title: "E-COMMERCE WEBSITE FOR MUSICAL INSTRUMENTS",
      description: "I built the frontend of this website using ReactJS and Bootstrap. Login and Signup functionality is also implemented.My friends did the backend using Django and MySQL.",
      imgUrl: projImg2,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p> I have developed 3 real world
                    Projects till now that are currently being used by the
                    people all over India. </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Data Structures</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Backend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <a>
                        <img src={projImg4} />
                      </a>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <a>
                          <h3>Coming Soon</h3>
                        </a>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}