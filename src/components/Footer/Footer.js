const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__icon"></div>
        <div className="footer__content">
          <div className="footer__contact">
            <p>
              You can reach me by Email!
            </p>
            <a href="mailto:yapinghwang1997@gmail.com" className="footer__email">Email Me</a>
          </div>
          <div className="footer__info">
            <p className="copyright">
              copyright YaPing 2021
            </p>
            <p className="footer__flaticon">
              Github icon &amp; Demo icon in projects page are from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer noopener" className="footer__link">Flaticon</a>.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;