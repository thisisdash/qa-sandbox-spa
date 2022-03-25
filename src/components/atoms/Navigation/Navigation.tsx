const Navigation = () => (
  <>
    <div className='site-navigation'>
      <div className='site-navigation__main-menu'>
        <div className='container'>
          <nav className='site-navigation__links'>
            <ul className='-for-employer-links'>
              <div className='site-navigation__links--top-mobile'>
                <li className='site-navigation__mobile-menu-item'>
                  <a href='/'>Personeel gezocht</a>
                </li>
                <li className='site-navigation__mobile-menu-item'>
                  <a href='/'>Vacature plaatsen</a>
                </li>
                <li className='site-navigation__mobile-menu-item'>
                  <a href='/'>Contact</a>
                </li>
              </div>
              <li className='site-navigation__mobile-menu-item'>
                <a className='site-navigation__main-menu-label' href='/'>
                  Overview
                </a>
              </li>
              <li className='site-navigation__mobile-menu-item'>
                <a
                  className='site-navigation__main-menu-label'
                  href='/registration'
                >
                  New registration
                </a>
              </li>
            </ul>
          </nav>
          <figure className='site-navigation__logo'>
            <a href='/'>
              <img
                src='https://origin.youngcapital.nl/external/static/images/site-navigation/yc.svg'
                alt='Website Title'
                title='Website Title'
              />
              <figcaption className='sr-only'>Website Title</figcaption>
            </a>
          </figure>
        </div>
      </div>
    </div>
    <div className='container' style={{ marginTop: '90px' }}>
      <h1 className='ribbon__heading'>QA Assignment playground</h1>
    </div>
  </>
);

export default Navigation;
