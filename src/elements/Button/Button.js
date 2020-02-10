import React from "react";

const Button = (props) => {
    const iconClass = `icon ${props.iconType}`;
    const btnClass = `ui ${props.btnSize} ${props.btnColor} button`
    return (
        <button className={btnClass} type={props.btnType}>
            <i className= {iconClass}></i>
            {props.btnText}
        </button>
    )
}

Button.defaultProps = {
    btnSize: "medium",
    btnColor: "blue",
    btnType: "button"
}

export default Button;