import {Outlet,Link} from 'react-router-dom';
import { Fragment, useContext,useState } from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart_icon.component';
import CartDropdown from '../../components/cart-dropdown/cart_dropdown';
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.style';

const Navigation = () => {

    const {currentUser} = useContext(UserContext);
    
    let [dis,setDis] = useState("none")
    const changeDropdownDisplay = () => {
        if(dis === 'none') setDis('block');
        else setDis('none');
    }

    return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <CrownLogo className='logo' />
            </LogoContainer>
        <NavLinks>
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
                currentUser ? 
                (<NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>)
                :(<NavLink to='/sign-in'> SIGN IN </NavLink>)
            }
            <div onClick={changeDropdownDisplay} >
            <CartIcon  />
            </div>
        </NavLinks>
        <CartDropdown dis={dis} />
        </NavigationContainer>
        <Outlet />
    </Fragment>
    )
  };

  export default Navigation;