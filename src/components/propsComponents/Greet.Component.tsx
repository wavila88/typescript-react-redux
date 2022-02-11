
import { useState } from 'react';

type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn : boolean;
}


export const GreetComponent = (props: GreetProps) => {
  //Asignamos valor por defecto en typescript
  const {messageCount = 0} = props;
  const [counter,setCounter] = useState();
  return(
    <>
      <h1>
        {
          props.isLoggedIn ? `Welcome ${props.name}! you have ${props.messageCount} messages unread`
            : `Welcom guest`
        }
      </h1>

    </>
  )
};