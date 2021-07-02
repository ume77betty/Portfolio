const Navigation = () => {

  return (
    <nav className="navigation">
      <div className="navigation__logo--box">
        <a className="navigation__logo--link"></a>
      </div>
      <ul className="navigation__list">
        <li className="navigation__list--item"><a className="navigation__list--link" href="https://ume77betty.github.io/Portfolio/">Home</a></li>
        <li className="navigation__list--item"><a className="navigation__list--link" href="https://ume77betty.github.io/Portfolio/projects">Projects</a></li>
        <li className="navigation__list--item"><a className="navigation__list--link" href="https://ume77betty.github.io/Portfolio/blog">Blog</a></li>
      </ul>
    </nav>
  )
}

export default Navigation;