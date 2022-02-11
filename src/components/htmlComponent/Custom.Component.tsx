import React from "react";
import { GreetComponent } from "../propsComponents/Greet.Component";

export const CustomComponent = (props: React.ComponentProps<typeof GreetComponent>) => {
  return(
    props.name
  )
}; 