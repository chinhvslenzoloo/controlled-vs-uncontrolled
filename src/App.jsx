import React, { useContext } from "react";
import { UserProvider, UserContext } from "./context/UserContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

const Navbar = () => {
  const { userName, isLoggedIn, login, logout } = useContext(UserContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`p-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}`}>
      <h1>Simple User Theme App</h1>
      <div>
        {isLoggedIn ? (
          <>
            <span>Welcome, {userName}!</span>
            <button onClick={logout} className="ml-2 p-1 border">Logout</button>
          </>
        ) : (
          <button onClick={() => login("Chill Evil")} className="p-1 border">
            Login
          </button>
        )}
        <button onClick={toggleTheme} className="ml-2 p-1 border">
          Toggle Theme
        </button>
      </div>
    </nav>
  );
};

const Profile = () => {
  const { userName, isLoggedIn } = useContext(UserContext);
  if (!isLoggedIn) return null;
  return (
    <div className="p-4 border mt-4">
      <h2>Profile</h2>
      <p>Name: {userName}</p>
    </div>
  );
};

const AppContent = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme === "dark" ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}`}>
      <Navbar />
      <Profile />
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <UserProvider>
      <AppContent />
    </UserProvider>
  </ThemeProvider>
);

export default App;
