import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import './App.css'
import LandingPage from './Pages/LandingPage';
import  { useEffect } from "react";

function App() {
  useEffect(() => {
    const root = document.documentElement;

    const applyDark = (isDark) =>
      root.classList.toggle("dark", isDark);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    applyDark(mq.matches);

    const handler = (e) => applyDark(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return (
    <>
      <LandingPage />

    </>
  )
}

export default App
