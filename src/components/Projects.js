import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';

import { ProjectCard } from './ProjectCard';

import projImg1 from '../assets/images/project-img1.png'
import projImg2 from '../assets/images/project-img2.png'
import projImg3 from '../assets/images/project-img3.png'
import colorSharp2 from '../assets/images/color-sharp2.png'

export const Projects = () => {
const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
	<section className="project" id="project">
		<Container>
			<Row>
				<Col>
        <TrackVisibility>
						{( {isVisible}) => 
						<div className={isVisible ? "animate__animated animate__bounce" : ""}>
              <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat, dolor ut fermentum mollis, arcu mi vehicula ante, sit amet condimentum eros lacus non nunc. Proin dignissim dapibus mauris et dignissim. Suspendisse potenti.</p>
            </div>}
            </TrackVisibility>
              <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
				  <Tab.Content>
					<Tab.Pane eventKey="first">
						<Row>
							{
								projects.map((project, index) => {
									return(
										<ProjectCard key={index} {...project}/>
									)
								})
							}
						</Row>
					</Tab.Pane>
					<Tab.Pane eventKey="second">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat, dolor ut fermentum mollis, arcu mi vehicula ante, sit amet condimentum eros lacus non nunc. Proin dignissim dapibus mauris et dignissim. Suspendisse potenti.Loren Ipsum</Tab.Pane>
					<Tab.Pane eventKey="third">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat, dolor ut fermentum mollis, arcu mi vehicula ante, sit amet condimentum eros lacus non nunc. Proin dignissim dapibus mauris et dignissim. Suspendisse potenti.</Tab.Pane>
				  </Tab.Content>
				</Tab.Container>
				</Col>
			</Row>
		</Container>
		<img src={colorSharp2} className="background-image-right" alt=""/>
	</section>
  )
}
