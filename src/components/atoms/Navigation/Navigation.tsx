import { Link } from 'react-router-dom';

const Navigation = () => (
  <>
    <div className='site-navigation'>
      <div className='site-navigation__main-menu'>
        <div className='container'>
          <figure className='site-navigation__logo'>
            <Link to='/'>
              <img
                src='https://origin.youngcapital.nl/external/static/images/site-navigation/yc.svg'
                alt='Website Title'
                title='Website Title'
              />
            </Link>
            <ul className='flex-row'>
              <li className='ml-2x'>
                <Link to='/'>Overview</Link>
              </li>
              <li className='ml-2x'>
                <Link to='/registration'>New registration</Link>
              </li>
            </ul>
          </figure>
        </div>
      </div>
    </div>
    <div className='container header'>
      <h1 className='ribbon__heading'>QA Assignment playground</h1>
    </div>
  </>
);

export default Navigation;
