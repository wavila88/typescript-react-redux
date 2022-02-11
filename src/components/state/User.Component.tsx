import { useState } from "react";


type AuthUser = {
  name: string;
  email: string;
}

export const UserComponent = () => {
  //Forma assert con null
  const [user, setUser] = useState<AuthUser | null>(null);
  //En caso de que llege indefinido que se hace
  const [user2, setUSer2] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: 'Celeste',
      email: 'amy@gmail.com'
    });
    setUSer2({
      name: 'Celeste',
      email: 'amy@gmail.com'
    });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>
        <h1>User name {user?.name} </h1>
        <h1>User email {user?.email} </h1>
      </div>
      <div>
        {/* deja quitar el ? */}
        <h1>User name {user2.name} </h1>
        <h1>User email {user2.email} </h1>
      </div>
    </div>
  );

};