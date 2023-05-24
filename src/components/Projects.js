import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ImgCube  from "../assets/img/Block_Matrix_x2__L.png";
import projImg1 from "../assets/img/project-img-1.png";
import projImg2 from "../assets/img/project-img-2.png";
import projImg3 from "../assets/img/project-img-3.png";
import projImg4 from "../assets/img/project-img-4.png";
import projImg5 from "../assets/img/project-img-5.png";
import projImg6 from "../assets/img/project-img-6.png";
import projImg7 from "../assets/img/project-img-7.png";
import projImg8 from "../assets/img/project-img-8.png";
import projImg9 from "../assets/img/project-img-9.png";
import projImg10 from "../assets/img/project-img-10.png";
import projImg11 from "../assets/img/project-img-11.png";
import projImg12 from "../assets/img/project-img-12.png";
import colorSharp1 from "../assets/img/color-sharp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg1,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg2,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg3,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg4,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg5,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg6,
        }
    ];

    const works = [
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg7,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg8,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg9,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg10,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg11,
        },
        {
            title: "Startup Works",
            description: "Front-end Development",
            imgUrl: projImg12,
        }
    ];

    return (
        <section className="project" id="projectss">
            <Container>
                <Row>
                    <Col size={12}>
                        <Row style={{ justifyContent: "center" }}>
                            <Col xs={10} md={2} xl={2}>  

                                <TrackVisibility>
                                    {({ isVisible }) =>
                                        <div className={isVisible ? "imgCube animate__animated animate__zoomIn" : ""}>
                                            <img src={ImgCube} alt="Header Img" />
                                        </div> }
                                </TrackVisibility>

                                <TrackVisibility>
                                    {({ isVisible }) => 
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h2>Projects</h2>
                                    </div>}   
                                </TrackVisibility> 

                            </Col>

                        </Row>    

                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <p>I leave the links to the open source.</p>  
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item >
                                            <Nav.Link eventKey="first">Web</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second">Work</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third">View</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                                <p>Responsive Website Projects.</p>
                                            <Row>
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
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <p>Private Jobs.</p>
                                            <Row>
                                                {
                                                    works.map((workS, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...workS}
                                                                />
                                                        )
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <p>For the privacy of the companies to which I provide my service,<br/>the completed projects are not visible.
                                                <br/>In any case, my skills and knowledge as a<br/>Front-end Developer are reflected.
                                                <br/>I invite you to enter my <a href="https://github.com/Facu-Lagomarsino">GitHub</a></p>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div> }
                        </TrackVisibility>    
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left-p" src={colorSharp1} alt="background color"/>
            <img className="background-image-right-p" src={colorSharp2} alt="color" />
        </section>
    )
}