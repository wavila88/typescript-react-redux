import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
}

export const LoginComponent = () => {


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>
        <h1>User is {isLoggedIn ? 'logged in': 'logged out'}</h1>
      </div>
    </div>
  );

};