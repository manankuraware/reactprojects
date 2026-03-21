import { useEffect, useState } from "react";
import { API } from "../api";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    API.get("/auth/user")
      .then((res) => setUser(res.data))
      .catch(() => console.log("Not logged in"));
  }, []);

  const logout = () => {
    API.get("/auth/logout").then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>Welcome {user.name}</p>}
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
