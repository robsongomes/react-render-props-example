import React, { useContext } from "react";
import UserContext from "./UserContext";

const Home = () => {
  // const user = useContext(UserContext);

  // return <div>Home Page - {user}</div>;

  return (
    <UserContext.Consumer>
      {({ user, setUser }) =>
        user ? (
          <>
            <div> {user} </div>
            <button onClick={() => setUser()}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => setUser("robson")}>Login</button>
          </>
        )
      }
    </UserContext.Consumer>
  );
};

export default Home;
