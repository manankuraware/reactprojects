const Home = () => {
  const login = () => {
    window.open("http://localhost:8000/auth/google", "_self");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login with Google</button>
    </div>
  );
};

export default Home;
