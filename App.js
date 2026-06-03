import { useEffect, useState } from "react";
import LoginScreen from "./src/screens/auth/LoginScreen.jsx";
import SplashScreen from "./src/screens/common/SplashScreen.jsx";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <LoginScreen />;
}
