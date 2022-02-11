import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserComponent = () => {
  const userContext = useContext(UserContext);

 const handleLogin = () => {
    userContext.setUser({
      name: 'Willy',
      email: 'willy@gmail.com'
    })
 };

 const handleLogout = () => {
 
    userContext.setUser(null);

 };
 
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>

      <div>User name is {userContext.user?.name}</div>
      <div>User email is {userContext.user?.email}</div>
    </div>
  );

};