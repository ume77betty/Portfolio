const Navigation = () => {

  return (
    <nav className="navigation">
      <div className="navigation__logo--box">
        <a className="navigation__logo--link"></a>
      </div>
      <ul className="navigation__list">
        <li className="navigation__list--item"><a className="navigation__list--link" href="http://localhost:3000/">Home</a></li>
        <li className="navigation__list--item"><a className="navigation__list--link" href="http://localhost:3000/projects">Projects</a></li>
        <li className="navigation__list--item"><a className="navigation__list--link" href="http://localhost:3000/blog">Blog</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;