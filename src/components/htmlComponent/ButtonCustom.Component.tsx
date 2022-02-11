import React from 'react';

type ButtonProps = {
  variant: 'primary' | 'secondary'
} & React.ComponentProps<'button'>

export const ButtonCustom = ({variant, children, ...rest}: ButtonProps) => {
  return (
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>)
};