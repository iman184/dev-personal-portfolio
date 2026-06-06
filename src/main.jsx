import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const savedTheme = localStorage.getItem("theme");
const preferredTheme =
  savedTheme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

document.documentElement.setAttribute("data-theme", preferredTheme);
localStorage.setItem("theme", preferredTheme);
document.title = "Zighed Imen";

const existingFavicon = document.querySelector('link[rel="icon"]');
if (existingFavicon) {
  existingFavicon.setAttribute("href", "/favicon.svg?v=1");
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
