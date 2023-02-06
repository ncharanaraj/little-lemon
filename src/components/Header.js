import logo from "../assets/images/logo.png"

function Header(){

    const imageStyle = {
        width: "193px",
        height: "55px",
    }

    return(
        <>
            <img src={logo} alt="logo" key={logo} style={imageStyle} />
        </>
    );
};

export default Header