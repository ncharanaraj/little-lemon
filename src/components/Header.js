import logo from "../images/logo.png"

function Header(){
    return(
        <img src={logo} alt="logo" key={logo} />
    );
};

export default Header