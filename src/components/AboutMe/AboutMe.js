import Navigation from "./Navigation";
import Header from "./Header";
import Footer from "../Footer/Footer";


const AboutMe = () => {
  return (
    <>

      <Navigation />
      <Header />
      <section className="about-me">
        <h3 className="about-me__header">About Me</h3>
        <p className="paragraph paragraph--left">
          I use React Hooks in most of my projects, and I'm still improving my React skills. Maybe you'll see some wrong codes or redundant codes in my projects, please just let me know if there's better way to make it perfect!
        </p>
        <p className="paragraph paragraph--left">
          I like reading, learning new skills, and I also like to play games!
        </p>
      </section>
      <Footer />
    </>

  )
}

export default AboutMe;