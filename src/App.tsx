import React from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import MovieResults from "./components/MovieResults";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

function App() {
  return (
    <AppProvider>
      <div className="app">
        <Header />
        <Navigation />
        <MovieResults />
      </div>
    </AppProvider>
  );
}

export default App;
