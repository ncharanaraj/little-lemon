import logo from "../images/logo.png"

function Header(){
    return(
        <div>
            <img src={logo} alt="logo" key={logo} />
        </div>
    );
};

export default Header