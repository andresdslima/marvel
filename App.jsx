import { useState, useContext } from "react";
import LoginScreen from "./Screens/LoginScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import HeroesScreen from "./Screens/HeroesScreen";
import HeroeDetailsScreen from "./Screens/HeroeDetailsScreen";

export default function App() {
  const [mockNavigation, setMockNavigation] = useState(0);
  // Could create a context to simulate transfering data via navigation
  // from HeroesScreen to HeroDetailsScreen (when a specific hero is selected)

  const navigateForward = () => {
    if (mockNavigation < 3) {
      setMockNavigation((prevState) => prevState + 1);
    }
  };

  const navigateBackward = () => {
    if (mockNavigation > 0) {
      setMockNavigation((prevState) => prevState + -1);
    }
  };

  return (
    <>
      {mockNavigation === 0 && (
        <LoginScreen navigateForward={navigateForward} />
      )}
      {mockNavigation === 1 && (
        <WelcomeScreen navigateForward={navigateForward} />
      )}
      {mockNavigation === 2 && (
        <HeroesScreen
          navigateForward={navigateForward}
          navigateBackward={navigateBackward}
        />
      )}
      {mockNavigation === 3 && (
        <HeroeDetailsScreen navigateBackward={navigateBackward} />
      )}
    </>
  );
}
