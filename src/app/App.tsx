import { useState } from "react";
import { LandingPage } from "./components/landing-page";
import { Dashboard } from "./components/dashboard";
import { AuthProvider } from "../contexts/AuthContext";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<"landing" | "dashboard">("landing");

  return (
    <AuthProvider>
      <div className="size-full">
        {currentScreen === "landing" ? (
          <LandingPage onStartPrediction={() => setCurrentScreen("dashboard")} />
        ) : (
          <Dashboard onBack={() => setCurrentScreen("landing")} />
        )}
      </div>
    </AuthProvider>
  );
}
