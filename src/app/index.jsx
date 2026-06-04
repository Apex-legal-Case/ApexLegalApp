import { useEffect, useState } from "react";
import LoginScreen from "../screens/auth/LoginScreen";
import SplashScreen from "../screens/common/SplashScreen";

export default function Page() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return showSplash ? <SplashScreen /> : <LoginScreen />;
}
