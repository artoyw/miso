import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./contexts/AuthContext"; // Custom context for authentication
import { CssBaseline } from "@mui/material"; // For consistent baseline styling
import theme from "./Theme"; // Custom theme settings

import LoginPage from "./components/LoginPage"; // Component for the login page
import AccountPage from "./components/AccountPage"; // Component for the account page

// The main App component
function App() {

  return (
    // The Router component from react-router-dom helps in handling different routes or pages
    <Router>
      {/* CssBaseline is a component from MUI. It helps in providing consistent baseline styling across different browsers. */}
      <CssBaseline/>
      {/* TODO: AuthProvider is a custom context component that provides authentication functionalities to its children. */}
      <AuthProvider>
        {/* ThemeProvider from MUI provides theming capabilities. We pass our custom theme to it. */}
        <ThemeProvider theme={theme}>
          {/* Routes is a component from react-router-dom that wraps all possible routes or pages */}
          <Routes>
            {/* Route represents a single route. Here, we define two routes: one for login and one for home. */}
            {/* The path prop determines the URL path, and the element prop determines which component to show. */}
            {/* makes the default page automatically re-route to the login page
                (instead of creating an entirely separate DefaultPage to hold as a placeholder)*/}
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<AccountPage />} />
            {/* These are more potential pages that we're hoping to create:
             />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/messaging" element={<MessagingPage />} />*/}
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;