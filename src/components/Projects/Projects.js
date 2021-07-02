import Navigation from "../AboutMe/Navigation";
import Footer from "../Footer/Footer";
import DailyPoem from '../../img/project__DailyPoem.jpg';
import Natours from '../../img/project__Natours.jpg';
import HouseHotel from '../../img/project__HouseHotel.jpg';
import Pomodoro from '../../img/project__PomodoroTimer.jpg';
import Github from '../../img/github.png';
import Demo from '../../img/demo.png';

const Projects = () => {


  const porjectList = [
    {
      projectName: 'Daily-Poem',
      projectImg: DailyPoem,
      projectGithub: `https://github.com/ume77betty/Daily-Poem`,
      projectDemo: `https://ume77betty.github.io/Daily-Poem/`,
      projectDesc: `A random poem generator! It's mainly for API practice.`
    },
    {
      projectName: 'House-Hotel',
      projectImg: HouseHotel,
      projectGithub: `https://github.com/ume77betty/hotel-reservation`,
      projectDemo: `https://ume77betty.github.io/hotel-reservation/`,
      projectDesc: `A hotel reservation website for F2E challenge. You can go to github for more information about F2E! (It's Chinese website)`,
    },
    {
      projectName: 'Natours',
      projectImg: Natours,
      projectGithub: `https://github.com/ume77betty/Natours-SCSS-practice`,
      projectDemo: `https://ume77betty.github.io/Natours-SCSS-practice/`,
      projectDesc: `This page is the practice of the course from Udemy: Advanced CSS and Sass: Flexbox, Grid, Animations and More! It's mainly for SCSS and RWD practice.`,
    },
    {
      projectName: 'Pomodoro Timer',
      projectImg: Pomodoro,
      projectGithub: `https://github.com/ume77betty/pomodoro-timer-with-react-hooks`,
      projectDemo: `https://ume77betty.github.io/pomodoro-timer-with-react-hooks/`,
      projectDesc: `It's a very simple pomodoro timer. There's default time for work and for rest, or you can adjust the timer according to your needs.`,
    }
  ];

  return (
    <>
      <Navigation />
      <div className="projects">
        <h3 className="projects__header">Projects</h3>
        <p className="paragraph paragraph--center">Click icon to Github repository or see the website demo!</p>

        <div className="projects__container">
          <ul className="projects__list">
            {porjectList.map((project, index) => {
              return (
                <li key={index} className="projects__item">
                  <div className="projects__item--left">
                    <h4 className="projects__item--title">{project.projectName}</h4>
                    <p className="projects__item--paragraph">{project.projectDesc}</p>
                    <a href={project.projectGithub} target="_blank" rel="noreferrer noopener" className="projects__item--link">
                      <img src={Github} alt="Github-icon" className="projects__item--icon"></img>
                    </a>
                    <a href={project.projectDemo} target="_blank" rel="noreferrer noopener" className="projects__item--link">
                      <img src={Demo} alt="Demo-icon" className="projects__item--icon"></img>
                    </a>
                  </div>
                  <div className="projects__item--right">
                    <img src={project.projectImg} alt="projects-img" className="projects__item--img"></img>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  )
};

export default Projects;