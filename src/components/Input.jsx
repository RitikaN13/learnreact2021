import React, { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
    const { type, onKeyDown, placeholder } = props;
    return(
    <input 
      ref={ref}
      type={type}
      onKeyDown={onKeyDown}
      placeholder={placeholder} 
    />)
})

// const forwardRef = React.forwardRef(Input)
export default Input;