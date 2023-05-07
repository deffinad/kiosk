import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

const Input = ({ type, onChange, icon, placeholder, name, value, onCloseChange }) => {
    return (
        <div className="input">
            <div className="input-icon">
                <FontAwesomeIcon icon={icon} />
            </div>
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
            <div className="input-close" style={value ? { opacity: '1' } : { opacity: '0' }} onClick={onCloseChange}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
        </div>
    )
}

export default Input