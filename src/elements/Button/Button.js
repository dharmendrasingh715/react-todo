import React from "react";

const Button = (props) => {
    const iconClass = `icon ${props.iconType}`;
    const btnClass = `ui ${props.btnSize} ${props.btnColor} button`
    return (
        <button className={btnClass} type={props.btnType} onClick={props.clickHandler} data-key={props.dataKey}>
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