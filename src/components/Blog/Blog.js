import Navigation from "../AboutMe/Navigation";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <>
      <Navigation />
      <div className="blog">
        <h3 className="blog__header">Blog</h3>
        <p className="paragraph paragraph--center">I'm still trying hard to run a blog, please look forward to it!</p>
      </div>
      <Footer />
    </>
  )
};

export default Blog;