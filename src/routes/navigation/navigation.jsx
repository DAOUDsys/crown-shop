import {Outlet,Link} from 'react-router-dom';
import './navigation.style.scss';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from '../../utils/firebase/firebase.utils';
const Navigation = () => {

    const {currentUser} = useContext(UserContext);

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
            {
                currentUser ? 
                    <span className='link' onClick={SignOutUser}>SIGN OUT</span>
                    :<Link className='link' to='/sign-in'> SIGN IN </Link>
            }
        </div>
        </div>
        <Outlet />
    </Fragment>
    )
  };

  export default Navigation;