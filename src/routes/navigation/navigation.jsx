import {Outlet,Link} from 'react-router-dom';
import './navigation.style.scss';
import { Fragment } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';


const Navigation = () => {
    return (
    <Fragment>
        <div className='navigation'>
            <Link className='main-logo' to='/'>
                <CrownLogo className='logo' />
            </Link>
        <div className='links'>
            <Link className='link' to='/shop'>
                SHOP
            </Link>
            <Link className='link' to='/sign-in'>
                SIGN IN
            </Link>
        </div>
        </div>
        <Outlet />
    </Fragment>
    )
  };

  export default Navigation;