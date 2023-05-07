const Button = ({label, onClick, style}) =>{
    return(
        <button onClick={onClick} className="button" style={style}>{label}</button>
    )
}

export default Button