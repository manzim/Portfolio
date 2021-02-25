import './App.css';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

import { MyNavbar } from "../src/components/my-navbar/mynavbar.jsx";
import { MyCarousal } from './components/my-carousal/mycarousal.jsx';
import { MyTitle } from './components/title-msg/mytitlemsg.jsx';
import { AboutMe } from './pages/aboutme/About';
import { Skills } from './pages/skills/Skills'
import { Experience } from './pages/experience/Experience.jsx';
import { Projects } from './components/project-timeline/ProjectTimeline';


export function App() {
  return (
    <><div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <MyNavbar />
      <MyTitle />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/background/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <AboutMe />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallex/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <Container className="container-box rounded">
            <Fade duration={500}>
              <Experience />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Projects />
        </Slide>
      </Container>
    </div>
    </>
  );
}
