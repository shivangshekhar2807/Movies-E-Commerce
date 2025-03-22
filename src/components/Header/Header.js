import HeaderLogo from "./HeaderLogo";
import HeaderNavbar from "./HeaderNavbar";


function Header({showCartHandler}) {
    return <>
        <HeaderNavbar showCartHandler={showCartHandler}></HeaderNavbar>
        <HeaderLogo></HeaderLogo>
    
    </>
    
}
export default Header;