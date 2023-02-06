function Button(props){
    const buttonStyle = {
        width: "200px",
        height: "60px",
        borderRadius: "0.5rem",
        backgroundColor: "#F4CE14",
        border: "none",
        color: "EDEEEE",
        marginTop: "1.2rem",
        fontWeight: "500",
        textAlign: "center",
        fontSize: "1.1rem"
    }

    return(
        <>
            <button style={buttonStyle}>{props.title}</button>
        </>
    );
}

export default Button;