import React, { useContext } from "react";
import UserContext from "./UserContext";

const About = () => {
  const { user, setUser } = useContext(UserContext);
  return user ? (
    <>
      <div>{user}</div>
      <button onClick={() => setUser(null)}>Logout</button>
    </>
  ) : (
    <button onClick={() => setUser("robson")}>Login</button>
  );
};

export default About;
