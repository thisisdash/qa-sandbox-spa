const Navigation = () => (
  <>
    <div className='site-navigation'>
      <div className='site-navigation__main-menu'>
        <div className='container'>
          <figure className='site-navigation__logo'>
            <a href='/'>
              <img
                src='https://origin.youngcapital.nl/external/static/images/site-navigation/yc.svg'
                alt='Website Title'
                title='Website Title'
              />
            </a>
            <ul className='flex-row'>
              <li className='ml-2x'>
                <a href='/'>Overview</a>
              </li>
              <li className='ml-2x'>
                <a href='/registration'>New registration</a>
              </li>
            </ul>
          </figure>
        </div>
      </div>
    </div>
    <div className='container header' >
      <h1 className='ribbon__heading'>QA Assignment playground</h1>
    </div>
  </>
);

export default Navigation;
