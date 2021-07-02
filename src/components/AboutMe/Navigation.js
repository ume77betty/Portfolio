import {
  Link
} from "react-router-dom";

const Navigation = () => {

  return (
    <nav className="navigation">
      <div className="navigation__logo--box">
        <a className="navigation__logo--link"></a>
      </div>
      <ul className="navigation__list">
        <li className="navigation__list--item"><Link to={`/`} className="navigation__list--link">Home</Link></li>
        <li className="navigation__list--item"><Link to={`/projects`} className="navigation__list--link">Projects</Link></li>
        <li className="navigation__list--item"><Link to={`/blog`} className="navigation__list--link">Blog</Link></li>
      </ul>
    </nav>
  )
}

export default Navigation;