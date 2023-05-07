export const Card = ({ children, style, onClick }) => {
    return (
        <div className="card" style={style} onClick={onClick}>{children}</div>
    )
}