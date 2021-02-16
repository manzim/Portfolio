import './App.css';
import Fade from 'react-reveal/Fade'
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";

import { MyNavbar } from "../src/components/my-navbar/mynavbar.jsx";
import { MyCarousal } from './components/my-carousal/mycarousal.jsx';
import { MyTitle } from './components/title-msg/mytitlemsg.jsx';
import { AboutMe } from './pages/aboutme/About';


export function App() {
  return (
    <><div className="App" style={{ position: "relative" }}>
    <MyCarousal />
    <MyNavbar />
    <MyTitle />
    {/* <Particles
      className="particles particles-box"
      params={particlesOptions}
    /> */}

    <div>
      <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage={require("./assets/img/parallex/background.webp")}
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
  </div>    </>
  );
}
