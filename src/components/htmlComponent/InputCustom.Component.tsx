import React from "react";

type InputProps = React.ComponentProps<'input'>

export const InputCustom = (props: InputProps) => {
  return <input {...props}/>
}  