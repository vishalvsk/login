import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="App">
      <h1>Login With Google</h1>
      {isAuthenticated ? (
        <li>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </li>
      ) : (
        <li>
          <button onClick={() => loginWithRedirect()}>Log In</button>
        </li>
      )}
    </div>
  );
}

export default App;
