import {Outlet,Link} from 'react-router-dom';
import './navigation.style.scss';
import { Fragment, useContext,useState } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart_icon.component';
import CartDropdown from '../../components/cart-dropdown/cart_dropdown';

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    
    let [dis,setDis] = useState("none")
    const changeDropdownDisplay = () => {
        if(dis === 'none') setDis('block');
        else setDis('none');
        console.log(dis);
    }

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
                (<span className='link' onClick={signOutUser}>SIGN OUT</span>)
                :(<Link className='link' to='/sign-in'> SIGN IN </Link>)
            }
            <div onClick={changeDropdownDisplay} >
            <CartIcon  />
            </div>
        </div>
        <CartDropdown dis={dis} />
        </div>
        <Outlet />
    </Fragment>
    )
  };

  export default Navigation;