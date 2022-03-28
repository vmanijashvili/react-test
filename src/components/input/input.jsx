import React from "react";
import "./input.scss";

const Input = (props) => {

    return (<div className='my-input'>
        <input placeholder={props.title}
               type={props.type || 'text'}
               name={props.name}
               value={props.value}
               onChange={props.onChange} />
    </div>);

}
export default Input;