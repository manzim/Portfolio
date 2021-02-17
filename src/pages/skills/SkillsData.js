import HTML5 from "../../assets/img/skills/html-5.svg";
import CSS3 from "../../assets/img/skills/css3.svg";
import BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import REACT from "../../assets/img/skills/react.svg";
import MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import REDUX from "../../assets/img/skills/redux.svg";
import REACT_ROUTER from "../../assets/img/skills/react-router.svg";
import REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import STYLED_COMPONENTS from "../../assets/img/skills/styled-components.svg";
import MSSQL from "../../assets/img/skills/mssql.svg";
import GIT from "../../assets/img/skills/git-icon.svg";
import HEROKU from "../../assets/img/skills/heroku.svg";
import GITHUB_PAGES from "../../assets/img/skills/github.svg";
import JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import TYPESCRIPT from "../../assets/img/skills/typescript.svg";
import Blueprint from "../../assets/img/skills/blueprint.svg";
import Tachyons from "../../assets/img/skills/Tachyons.svg";
import POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import PYTHON from "../../assets/img/skills/python.svg";

export const Skill = {
    frontEnd: [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            altText: "HTML5",
            imgSrc: HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: CSS3,
            skillName: "CSS3",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: BOOTSTRAP,
            skillName: "Bootstrap",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: REACT,
            skillName: "React JS",
        },
        {
            link: "https://redux.js.org/",
            imgAltText: "Redux",
            imgSrc: REDUX,
            skillName: "Redux",
        },
        {
            link: "https://reacttraining.com/react-router/",
            imgAltText: "React Router",
            imgSrc: REACT_ROUTER,
            skillName: "React Router",
        },
        {
            link: "https://material-ui.com/",
            imgAltText: "Material-UI",
            imgSrc: MATERIALUI,
            skillName: "Material-UI",
        },
        {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
        },
        {
            link: "https://styled-components.com/",
            imgAltText: "styled-components",
            imgSrc: STYLED_COMPONENTS,
            skillName: "styled-components",
        },
        {
            link: "https://blueprintjs.com/documentation",
            altText: "BlueprintJS",
            imgSrc: Blueprint,
            skillName: "BluePrintJS",
        },
        {
            link: "https://tachyons.io",
            altText: "tachyons",
            imgSrc: Tachyons,
            skillName: "Tachyons",
        },
    ],

    backend: [
        {
            link: "https://nodejs.org/en/",
            imgAltText: "Node.js",
            imgSrc: PYTHON,
            skillName: "Node.js",
        },
    ],
    hostingPlatforms: [
        {
            link: "https://www.heroku.com/",
            imgAltText: "Heroku",
            imgSrc: HEROKU,
            skillName: "Heroku",
        },
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: GITHUB_PAGES,
            skillName: "GitHub Pages",
        },
    ],
    programmingLanguages: [
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://www.typescriptlang.org/",
            imgAltText: "TypeScript",
            imgSrc: TYPESCRIPT,
            skillName: "TypeScript",
        },
        {
            link: "https://www.python.org/",
            imgAltText: "Python",
            imgSrc: PYTHON,
            skillName: "Python",
        },
    ],
    databases: [
        {
            link: "https://www.postgresql.org/",
            imgAltText: "indexedDB",
            imgSrc: POSTGRESQL,
            skillName: "index DB",
        },
        {
            link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
            imgAltText: "MS-SQL",
            imgSrc: MSSQL,
            skillName: "MySQL",
        },
    ],
    versionControl: [
        {
            link: "https://git-scm.com/",
            imgAltText: "GIT",
            imgSrc: GIT,
            skillName: "GIT",
        },
    ],
    devTools: [
        {
            link: "https://code.visualstudio.com/docs",
            imgAltText: "vs code",
            imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
            skillName: "VS Code"
        }      
    ]
};